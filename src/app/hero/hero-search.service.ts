import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable }   from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Hero } from '../model/hero';

@Injectable()
export class HeroSearchService {

    constructor(private http: Http) {}

    /**
     * Zoek heroes op basis van een zoekterm
     * @param term
     * @returns {Observable<R>}
     */
    search(term: string): Observable<Hero[]> {
        return this.http
            .get(`app/heroes/?name=${term}`)
            .map(response => response.json().data as Hero[]);
    }
}
