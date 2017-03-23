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
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var testing_2 = require('../../testing');
var hero_1 = require('../model/hero');
var dashboard_hero_component_1 = require('./dashboard-hero.component');
beforeEach(testing_2.addMatchers);
describe('DashboardHeroComponent when tested directly', function () {
    var comp;
    var expectedHero;
    var fixture;
    var heroEl;
    // async beforeEach
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [dashboard_hero_component_1.DashboardHeroComponent],
        })
            .compileComponents(); // compile template and css
    }));
    // synchronous beforeEach
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(dashboard_hero_component_1.DashboardHeroComponent);
        comp = fixture.componentInstance;
        heroEl = fixture.debugElement.query(platform_browser_1.By.css('.hero')); // find hero element
        // pretend that it was wired to something that supplied a hero
        expectedHero = new hero_1.Hero(42, 'Test Name');
        comp.hero = expectedHero;
        fixture.detectChanges(); // trigger initial data binding
    });
    it('should display hero name', function () {
        var expectedPipedName = expectedHero.name.toUpperCase();
        expect(heroEl.nativeElement.textContent).toContain(expectedPipedName);
    });
    it('should raise selected event when clicked', function () {
        var selectedHero;
        comp.selected.subscribe(function (hero) { return selectedHero = hero; });
        heroEl.triggerEventHandler('click', null);
        expect(selectedHero).toBe(expectedHero);
    });
    it('should raise selected event when clicked', function () {
        var selectedHero;
        comp.selected.subscribe(function (hero) { return selectedHero = hero; });
        testing_2.click(heroEl); // triggerEventHandler helper
        expect(selectedHero).toBe(expectedHero);
    });
});
//////////////////
describe('DashboardHeroComponent when inside a test host', function () {
    var testHost;
    var fixture;
    var heroEl;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [dashboard_hero_component_1.DashboardHeroComponent, TestHostComponent],
        }).compileComponents();
    }));
    beforeEach(function () {
        // create TestHostComponent instead of DashboardHeroComponent
        fixture = testing_1.TestBed.createComponent(TestHostComponent);
        testHost = fixture.componentInstance;
        heroEl = fixture.debugElement.query(platform_browser_1.By.css('.hero')); // find hero
        fixture.detectChanges(); // trigger initial data binding
    });
    it('should display hero name', function () {
        var expectedPipedName = testHost.hero.name.toUpperCase();
        expect(heroEl.nativeElement.textContent).toContain(expectedPipedName);
    });
    it('should raise selected event when clicked', function () {
        testing_2.click(heroEl);
        // selected hero should be the same data bound hero
        expect(testHost.selectedHero).toBe(testHost.hero);
    });
});
////// Test Host Component //////
var core_1 = require('@angular/core');
var TestHostComponent = (function () {
    function TestHostComponent() {
        this.hero = new hero_1.Hero(42, 'Test Name');
    }
    TestHostComponent.prototype.onSelected = function (hero) { this.selectedHero = hero; };
    TestHostComponent = __decorate([
        core_1.Component({
            template: "\n    <dashboard-hero  [hero]=\"hero\"  (selected)=\"onSelected($event)\"></dashboard-hero>"
        }), 
        __metadata('design:paramtypes', [])
    ], TestHostComponent);
    return TestHostComponent;
}());
//# sourceMappingURL=dashboard-hero.component.spec.js.map