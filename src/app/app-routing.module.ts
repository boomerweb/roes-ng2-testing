import { NgModule }       from '@angular/core';
import {RouterModule, Routes}   from '@angular/router';

import { AboutComponent } from './about.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero/hero-detail.component";
import {HeroesComponent} from "./hero/heroes.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ] // re-export the module declarations
})
export class AppRoutingModule { }
