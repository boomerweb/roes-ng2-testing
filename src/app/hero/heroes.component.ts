import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../model/hero.service';
import { Router } from '@angular/router';
import {HttpHeroService} from "../model/http-hero.service";

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: [ './heroes.component.css' ]
})


export class HeroesComponent implements OnInit {
    errorMessage: string;

    heroes: Hero[];
    selectedHero: Hero;
    mode = 'Observable';

    /**
     * Maakt een heroservice instantie aan bij initialisatie van de main app component
     * @param heroService
     */
    constructor(
        private heroService: HttpHeroService,
        private router: Router) { }


    ngOnInit() {this.getHeroes(); }

    /**
     * Haalt alle heroes op
     */
    // getHeroes(): void {
    //     this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    // }

    getHeroes() {
        this.heroService.getHeroes()
            .subscribe(
                heroes => this.heroes = heroes,
                error =>  this.errorMessage = <any>error);
    }


    /**
     * navigeer naar detail pagina van een hero
     */
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    /**
     * verwijderen van een hero
     * @param hero
     */
    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        console.log(this.selectedHero);
    }

    add(name: string) {
        if (!name) { return; }
        this.heroService.addHero(name)
            .subscribe(
                hero  => this.heroes.push(hero),
                error =>  this.errorMessage = <any>error);
    }


    // /**
    //  * Voeg een hero toe
    //  * @param name
    //  */
    // add(name: string): void {
    //     name = name.trim();
    //     if (!name) { return; }
    //     this.heroService.addHero(name)
    //         .then(hero => {
    //             this.heroes.push(hero);
    //             this.selectedHero = null;
    //         });
    // }
}