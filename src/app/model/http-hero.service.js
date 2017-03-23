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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var HttpHeroService = (function () {
    function HttpHeroService(http) {
        this.http = http;
        this._heroesUrl = 'app/heroes'; // URL to web api
        this.headers = new http_2.Headers({ 'Content-Type': 'application/json' });
    }
    HttpHeroService.prototype.delete = function (id) {
        var url = this._heroesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    HttpHeroService.prototype.getHeroes = function () {
        return this.http.get(this._heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpHeroService.prototype.getHero = function (id) {
        return this.http
            .get('app/heroes/?id=${id}')
            .map(function (r) { return r.json().data; });
    };
    HttpHeroService.prototype.addHero = function (name) {
        var body = JSON.stringify({ name: name });
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this._heroesUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpHeroService.prototype.updateHero = function (hero) {
        var body = JSON.stringify(hero);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.put(this._heroesUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpHeroService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json();
        return body.data || {};
    };
    // private handleError (error: any) {
    //   // In a real world app, we might send the error to remote logging infrastructure
    //   let errMsg = error.message || 'Server error';
    //   console.error(errMsg); // log to console instead
    //   return Observable.throw(errMsg);
    // }
    HttpHeroService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return HttpHeroService;
}());
HttpHeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpHeroService);
exports.HttpHeroService = HttpHeroService;
//# sourceMappingURL=http-hero.service.js.map