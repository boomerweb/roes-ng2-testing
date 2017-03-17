import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../model/hero.service';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: [ './heroes.component.css' ]
})


export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    /**
     * Maakt een heroservice instantie aan bij initialisatie van de main app component
     * @param heroService
     */
    constructor(
        private heroService: HeroService,
        private router: Router) { }


    ngOnInit(): void {this.getHeroes(); }

    /**
     * Haalt alle heroes op
     */
    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
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

    /**
     * Voeg een hero toe
     * @param name
     */
    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }
}