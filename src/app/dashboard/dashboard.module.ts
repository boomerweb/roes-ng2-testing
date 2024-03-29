import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardHeroComponent } from './dashboard-hero.component';
import {HeroSearchComponent} from '../hero/hero-search.component';
import {InMemoryDataService} from '../shared/in-memory-data.service';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HeroService} from '../model/hero.service';
import {HttpModule} from '@angular/http';

const routes: Routes =  [
  { path: 'dashboard',  component: DashboardComponent },
];
// van declarations ,HeroDetailComponent, HeroesComponent, HeroSearchComponent
@NgModule({
  imports:      [
    SharedModule,
    HttpModule,
    RouterModule.forChild(routes),
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [ HeroService ],
  declarations: [ DashboardComponent, DashboardHeroComponent, HeroSearchComponent]
})
export class DashboardModule { }
