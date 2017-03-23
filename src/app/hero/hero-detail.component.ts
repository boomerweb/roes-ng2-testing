/* tslint:disable:member-ordering */
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';

import { Location }                 from '@angular/common';


import 'rxjs/add/operator/map';

import { Hero }              from '../model';
import { HeroDetailService } from './hero-detail.service';

@Component({
  moduleId: module.id,
  selector:    'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls:  ['./hero-detail.component.css' ],
  providers:  [ HeroDetailService ]
})
export class HeroDetailComponent implements OnInit {
    //private location: Location
  constructor(
    private heroDetailService: HeroDetailService,
    private route:  ActivatedRoute,
    private router: Router
    ) {
  }

  @Input() hero: Hero;

  ngOnInit(): void {
    // get hero when `id` param changes
    this.route.params.subscribe(p => this.getHero(p && p['id']));
  }

  goBack(): void {
    //this.location.back();
      this.router.navigate(['../'], {relativeTo: this.route});
  }


  private getHero(id: string): void {
    // when no id or id===0, create new hero
    if (!id) {
      this.hero = new Hero();
      return;
    }

    this.heroDetailService.getHero(id).then(hero => {
      if (hero) {
        this.hero = hero;
      } else {
        this.gotoList(); // id not found; navigate to list
      }
    });
  }

  /**
   * Sla een Hero op
   * Ga daarna terug naar het vorige scherm.
   */
  save(): void {
    this.heroDetailService.saveHero(this.hero).then(() => this.goBack());
  }

  cancel() { this.gotoList(); }

  gotoList() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
