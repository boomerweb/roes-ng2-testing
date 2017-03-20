import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutComponent }   from './about.component';
import { BannerComponent }  from './banner.component';
import { HeroService,
         UserService }      from './model';
import { TwainService }     from './shared/twain.service';
import { WelcomeComponent } from './welcome.component';


import { DashboardModule }  from './dashboard/dashboard.module';
import { SharedModule }     from './shared/shared.module';
import {HeroDetailComponent} from "./hero/hero-detail.component";
import {HeroesComponent} from "./hero/heroes.component";
import {HeroSearchComponent} from "./hero/hero-search.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";

//import {DashboardHeroComponent} from "./dashboard/dashboard-hero.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DashboardModule,
    AppRoutingModule,
    SharedModule
  ],
  providers:    [
      HeroService,
    TwainService,
    UserService ],
  declarations: [
      AppComponent,
    AboutComponent,
    BannerComponent,
    WelcomeComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
