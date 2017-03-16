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
var http_1 = require("@angular/http");
require('rxjs/add/operator/toPromise');
//import { HEROES }     from './test-heroes';
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = 'api/heroes'; // URL to web api waar de heroes van geladen worden
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    // getHeroes() {
    //   return Promise.resolve(HEROES);
    // }
    /**
     * @param id
     * @returns {any}
     */
    HeroService.prototype.getHero = function (id) {
        if (typeof id === 'string') {
            id = parseInt(id, 10);
        }
        return this.getHeroes().then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    /**
     * Haalt een enkele hero op
     * @param id
     * @returns {Promise<Hero>}
     */
    HeroService.prototype.getHeroby = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    /**
     * Haalt een set van heroes op
     * @returns {Promise<Hero[]>}
     */
    HeroService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; }) // call the json method of the HTTP Response to extract the data within the response
            .catch(this.handleError); //catch server failures and pass them to an error handler:
    };
    /**
     * Deleten van een hero
     * @param id
     * @returns {Promise<TResult|T>}
     */
    HeroService.prototype.delete = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    /***
     * Maakt een nieuwe hero aan
     * @param name
     * @returns {Promise<Promise<any>>|Promise<Hero>|Maybe<T>|Observable<Hero>|promise.Promise<Hero>}
     */
    HeroService.prototype.create = function (name) {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.updateHero = function (hero) {
        return this.getHero(hero.id).then(function (h) {
            if (!h) {
                throw new Error("Hero " + hero.id + " not found");
            }
            return Object.assign(h, hero);
        });
    };
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    /**
     * Haalt een set van heres op met een vertraging van 2 seconden
     * Zou een langzame verbinding simuleren.
     * @returns {Promise<T>}
     */
    HeroService.prototype.getHeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getHeroes()); }, 2000);
        });
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map