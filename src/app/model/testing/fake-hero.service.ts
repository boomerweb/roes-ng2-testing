// re-export for tester convenience
export { Hero } from '../hero';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import 'rxjs/add/operator/toPromise';
// import Promise = Q.Promise;

export const HEROES: Hero[] = [
  new Hero(41, 'Bob'),
  new Hero(42, 'Carol'),
  new Hero(43, 'Ted'),
  new Hero(44, 'Alice'),
  new Hero(45, 'Speedy'),
  new Hero(46, 'Stealthy')
];

export class FakeHeroService implements HeroService {


  heroes = HEROES.map(h => h.clone());
  lastPromise: Promise<any>;  // remember so we can spy on promise calls

  getHero(id: number | string) {
    if (typeof id === 'string') {
      id = parseInt(id as string, 10);
    }
    const hero = this.heroes.find(h => h.id === id);
    return this.lastPromise = Promise.resolve(hero);
  }

  getHeroes() {
    return this.lastPromise = Promise.resolve<Hero[]>(this.heroes);
  }

  updateHero(hero: Hero): Promise<Hero> {
    return this.lastPromise = this.getHero(hero.id).then(h => {
      return h ?
        Object.assign(h, hero) :
        Promise.reject(`Hero ${hero.id} not found`) as any as Promise<Hero>;
    });
  }
}
