import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import { Hero }       from './hero';
//import { HEROES }     from './test-heroes';

@Injectable()
/** Dummy HeroService. Pretend it makes real http requests */
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api waar de heroes van geladen worden
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http){}


  // getHeroes() {
  //   return Promise.resolve(HEROES);
  // }


  /**
   * @param id
   * @returns {any}
   */
  getHero(id: number | string): Promise<Hero> {
    if (typeof id === 'string') {
      id = parseInt(id as string, 10);
    }
    return this.getHeroes().then(
      heroes => heroes.find(hero => hero.id === id)
    );
  }

  /**
   * Haalt een enkele hero op
   * @param id
   * @returns {Promise<Hero>}
   */
  getHeroby(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Hero)
        .catch(this.handleError);
  }
  /**
   * Haalt een set van heroes op
   * @returns {Promise<Hero[]>}
   */
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
        .toPromise()
        .then(response => response.json().data as Hero[]) // call the json method of the HTTP Response to extract the data within the response
        .catch(this.handleError); //catch server failures and pass them to an error handler:
  }


  /**
   * Deleten van een hero
   * @param id
   * @returns {Promise<TResult|T>}
   */
  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
  }


  /***
   * Maakt een nieuwe hero aan
   * @param name
   * @returns {Promise<Promise<any>>|Promise<Hero>|Maybe<T>|Observable<Hero>|promise.Promise<Hero>}
   */
  create(name: string): Promise<Hero> {
    return this.http
        .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
  }


  updateHero(hero: Hero): Promise<Hero> {
    return this.getHero(hero.id).then(h => {
      if (!h) {
        throw new Error(`Hero ${hero.id} not found`);
      }
      return Object.assign(h, hero);
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  /**
   * Haalt een set van heres op met een vertraging van 2 seconden
   * Zou een langzame verbinding simuleren.
   * @returns {Promise<T>}
   */
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}
