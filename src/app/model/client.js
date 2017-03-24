// import { randomstring } from 'randomstring/lib/randomstring.js';
"use strict";
// import {and} from "@angular/router/src/utils/collection";
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
var Client = (function () {
    /**
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
    function Client(id, voornaam, achternaam, geboortedatum, idVerloopdatum, idType, geslacht, bsn, idCheck, adres, huisnummer, telefoon, postcode, plaats, adresLijst) {
        if (id === void 0) { id = 0; }
        if (voornaam === void 0) { voornaam = 'Demo'; }
        if (achternaam === void 0) { achternaam = ''; }
        if (geboortedatum === void 0) { geboortedatum = new Date(); }
        if (idVerloopdatum === void 0) { idVerloopdatum = Date; }
        if (idType === void 0) { idType = String; }
        if (geslacht === void 0) { geslacht = Boolean; }
        if (bsn === void 0) { bsn = Number; }
        if (idCheck === void 0) { idCheck = Boolean; }
        if (adres === void 0) { adres = String; }
        if (huisnummer === void 0) { huisnummer = String; }
        if (telefoon === void 0) { telefoon = String; }
        if (postcode === void 0) { postcode = String; }
        if (plaats === void 0) { plaats = String; }
        if (adresLijst === void 0) { adresLijst = [Number, String]; }
        this.id = id;
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.geboortedatum = geboortedatum;
        this.idVerloopdatum = idVerloopdatum;
        this.idType = idType;
        this.geslacht = geslacht;
        this.bsn = bsn;
        this.idCheck = idCheck;
        this.adres = adres;
        this.huisnummer = huisnummer;
        this.telefoon = telefoon;
        this.postcode = postcode;
        this.plaats = plaats;
        this.adresLijst = adresLijst;
        this.achternaam = (achternaam === '') ? this.neppeAchternaam().toString() : this.achternaam;
    }
    Client.prototype.clone = function () { return new Client(this.id, this.voornaam, this.achternaam, this.geboortedatum); };
    /**
     * Maakt een unieke id
     * @returns {string}
     */
    Client.prototype.makeId = function () {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 4; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    Client.prototype.neppeAchternaam = function () {
        var randomAchternaam = 'Demo' + this.makeId();
        return randomAchternaam;
    };
    ;
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=client.js.map