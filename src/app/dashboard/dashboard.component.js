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
var router_1 = require('@angular/router');
var model_1 = require('../model');
var DashboardComponent = (function () {
    function DashboardComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    DashboardComponent.prototype.gotoDetail = function (hero) {
        var url = "/heroes/" + hero.id;
        this.router.navigateByUrl(url);
        console.log(this.f(1) === 50);
    };
    Object.defineProperty(DashboardComponent.prototype, "title", {
        get: function () {
            var cnt = this.heroes.length;
            return cnt === 0 ? 'No Heroes' :
                cnt === 1 ? 'Top Hero' : "Top " + cnt + " Heroes";
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.f = function (x, y, z) {
        if (y === void 0) { y = 7; }
        if (z === void 0) { z = 42; }
        console.log(x + y);
        return x + y + z;
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, model_1.HeroService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map