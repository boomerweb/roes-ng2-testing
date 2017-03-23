import { Client } from './client';

describe('Client', () => {
    it('has name', () => {
        const client = new Client(1, 'Super Cat');
        expect(client.voornaam).toBe('Super Cat');
    });

    it('has id', () => {
        const client = new Client(1, 'Super Cat' );
        expect(client.id).toBe(1);
    });


    it('has a valid birthdate', () =>{
       const client = new Client(1, 'Super Cat', 'Bad ass', new Date(2017,2,16));

        jasmine.clock().install();
        jasmine.clock().mockDate(client.geboortedatum);

        jasmine.clock().tick(50); // zet de tijd handmatig 50 milli seconden vooruit zonder erop te wachten
       expect(new Date().getTime()).toEqual(client.geboortedatum.getTime() + 50)
    });



    it('can clone itself', () => {
        const client = new Client(1, 'Super Cat', 'Demo', new Date());
        const clone = client.clone();
        expect(client).toEqual(clone);
    });


    it('gets a random name when no name is given', () => {
       const client = new Client(1, 'jan', '', new Date());

       const clone = new Client(1, 'jan', '', new Date());
       expect(client.achternaam).not.toEqual(clone.achternaam);

    });

    it('Must have a name', () => {
        const client = new Client(1);
        console.log(client);
        expect(client.voornaam).not.toBeNull();
    });



 afterAll(()=>{
     jasmine.clock().uninstall();
 });
});