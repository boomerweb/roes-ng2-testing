import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";

import { SharedModule }           from '../shared/shared.module';

import { DashboardComponent }     from './dashboard.component';
import { DashboardHeroComponent } from './dashboard-hero.component';
import {HeroSearchComponent} from "../hero/hero-search.component";
import {InMemoryDataService} from "../shared/in-memory-data.service";
import {HeroDetailComponent} from "../hero/hero-detail.component";
import {HeroesComponent} from "../hero/heroes.component";
import {HeroService} from "../model/hero.service";
import {HeroSearchService} from "../hero/hero-search.service";

const routes: Routes =  [
  { path: 'dashboard',  component: DashboardComponent },
];


@NgModule({
  imports:      [
    SharedModule,
    HttpModule,
    RouterModule.forChild(routes),

    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [ HeroService, HeroSearchService ],
  declarations: [
      DashboardComponent,
    DashboardHeroComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent ]
})
export class DashboardModule { }
