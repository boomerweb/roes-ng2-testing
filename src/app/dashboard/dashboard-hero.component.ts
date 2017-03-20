import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from '../model';
import {Router} from "@angular/router";

@Component({
  selector:    'dashboard-hero',
  templateUrl: './dashboard-hero.component.html',
  styleUrls: [ './dashboard-hero.component.css' ]
})
export class DashboardHeroComponent {
  @Input() hero: Hero;
  @Output() selected = new EventEmitter<Hero>();
  click() { this.selected.emit(this.hero); }

  //selectedHero: Hero;

  // constructor(private router: Router) {
  // }


  // gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selectedHero.id]);
  // }
  //
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.gotoDetail();
  // }

  // click() {
  //   let x = this.selected.mapTo(hero => hero as Hero);
  //   console.log(x);
  //   this.selected.emit(this.hero);
  // }
}


