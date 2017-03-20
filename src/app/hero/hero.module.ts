import { NgModule }     from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { routedComponents, HeroRoutingModule } from './hero-routing.module';
import {HeroSearchService} from "./hero-search.service";
import {HeroService} from "../model/hero.service";

@NgModule({
  imports:      [ SharedModule, HeroRoutingModule ],
  providers: [ HeroService, HeroSearchService ],
  declarations: [ routedComponents ]
})
export class HeroModule { }
