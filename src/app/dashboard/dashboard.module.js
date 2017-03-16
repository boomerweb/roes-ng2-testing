"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var shared_module_1 = require('../shared/shared.module');
var dashboard_component_1 = require('./dashboard.component');
var dashboard_hero_component_1 = require('./dashboard-hero.component');
var hero_search_component_1 = require("../hero/hero-search.component");
var in_memory_data_service_1 = require("../shared/in-memory-data.service");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var hero_detail_component_1 = require("../hero/hero-detail.component");
var heroes_component_1 = require("../hero/heroes.component");
var hero_service_1 = require("../model/hero.service");
var http_1 = require("@angular/http");
var routes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
];
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService)
            ],
            providers: [hero_service_1.HeroService],
            declarations: [dashboard_component_1.DashboardComponent, dashboard_hero_component_1.DashboardHeroComponent, hero_detail_component_1.HeroDetailComponent, heroes_component_1.HeroesComponent, hero_search_component_1.HeroSearchComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map