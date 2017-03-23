//import { randomstring } from 'randomstring/lib/randomstring.js';


import {and} from "@angular/router/src/utils/collection";
/**
 * @property Number id
 * @property String voornaam
 * @property String achternaam
 * @property Date geboortedatum
 * @property Date idVerloopdatum
 * @property String idType
 * @property String geslacht
 * @property String adres
 * @property String huisnummer
 * @property String telefoon
 * @property String postcode
 * @property String plaats
 * @property [Number, String] adresLijst
 */
export class Client {
    /**
     * \
     * @param id
     * @param voornaam
     * @param achternaam
     * @param geboortedatum
     * @param idVerloopdatum
     * @param idType
     * @param geslacht
     * @param bsn
     * @param idCheck
     * @param adres
     * @param huisnummer
     * @param telefoon
     * @param postcode
     * @param plaats
     * @param adresLijst
     */
    constructor(

        public id = 0,
        public voornaam = 'Demo',
        public achternaam = '',
        public geboortedatum = new Date(),
        public idVerloopdatum = Date,
        public idType = String,
        public geslacht = Boolean,
        public bsn = Number,
        public idCheck = Boolean,
        public adres = String,
        public huisnummer = String,
        public telefoon = String,
        public postcode = String,
        public plaats = String,
        public adresLijst = [Number, String])
    {

        this.achternaam = (achternaam === '' ) ?  this.neppeAchternaam().toString() : this.achternaam;
    }
    clone() { return new Client(this.id, this.voornaam, this.achternaam, this.geboortedatum ); }

    /**
     * Maakt een unieke id
     * @returns {string}
     */
    makeId(): String{
            let text = "";
            const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for( let i=0; i < 4; i++ )
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
    }

    private neppeAchternaam(): String{
        const randomAchternaam = 'Demo' +  this.makeId();
        return randomAchternaam;
    };
}