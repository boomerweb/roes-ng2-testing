"use strict";
var client_1 = require('./client');
describe('Client', function () {
    it('has name', function () {
        var client = new client_1.Client(1, 'Super Cat');
        expect(client.voornaam).toBe('Super Cat');
    });
    it('has id', function () {
        var client = new client_1.Client(1, 'Super Cat');
        expect(client.id).toBe(1);
    });
    it('has a valid birthdate', function () {
        var client = new client_1.Client(1, 'Super Cat', 'Bad ass', new Date(2017, 2, 16));
        jasmine.clock().install();
        jasmine.clock().mockDate(client.geboortedatum);
        jasmine.clock().tick(50); // zet de tijd handmatig 50 milli seconden vooruit zonder erop te wachten
        expect(new Date().getTime()).toEqual(client.geboortedatum.getTime() + 50);
    });
    it('can clone itself', function () {
        var client = new client_1.Client(1, 'Super Cat', 'Demo', new Date());
        var clone = client.clone();
        expect(client).toEqual(clone);
    });
    it('gets a random name when no name is given', function () {
        var client = new client_1.Client(1, 'jan', '', new Date());
        var clone = new client_1.Client(1, 'jan', '', new Date());
        expect(client.achternaam).not.toEqual(clone.achternaam);
    });
    it('Must have a name', function () {
        var client = new client_1.Client(1);
        console.log(client);
        expect(client.voornaam).not.toBeNull();
    });
    afterAll(function () {
        jasmine.clock().uninstall();
    });
});
//# sourceMappingURL=client.spec.js.map