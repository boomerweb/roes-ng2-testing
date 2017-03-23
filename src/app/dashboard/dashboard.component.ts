import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero, HeroService } from '../model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero) {
    const url = `/heroes/${hero.id}`;
    this.router.navigateByUrl(url);
    console.log(this.f(1) === 50);
  }

  get title() {
    const cnt = this.heroes.length;
    return cnt === 0 ? 'No Heroes' :
      cnt === 1 ? 'Top Hero' :  `Top ${cnt} Heroes`;
  }

  f (x, y = 7, z = 42) {
    console.log(x + y);
  return x + y + z;
  }
}
