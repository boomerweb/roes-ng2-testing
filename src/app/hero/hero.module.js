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
var hero_routing_module_1 = require('./hero-routing.module');
var HeroModule = (function () {
    function HeroModule() {
    }
    HeroModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule, hero_routing_module_1.HeroRoutingModule],
            declarations: [hero_routing_module_1.routedComponents]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroModule);
    return HeroModule;
}());
exports.HeroModule = HeroModule;
//# sourceMappingURL=hero.module.js.map