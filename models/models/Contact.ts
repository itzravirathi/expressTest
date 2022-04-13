// tslint:disable
/**
 * Commerce Service API
 * API for Digital Commerce Platform
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    Language,
    Salutation,
    Title,
} from './';

/**
 * @export
 * @interface Contact
 */
export interface Contact {
    /**
     * @type {string}
     * @memberof Contact
     */
    birthDate?: string;
    /**
     * @type {string}
     * @memberof Contact
     */
    email?: string;
    /**
     * FAX number
     * @type {string}
     * @memberof Contact
     */
    fax?: string;
    /**
     * @type {string}
     * @memberof Contact
     */
    firstName?: string;
    /**
     * @type {Language}
     * @memberof Contact
     */
    language?: Language;
    /**
     * @type {string}
     * @memberof Contact
     */
    lastName?: string;
    /**
     * SMS phone numer
     * @type {string}
     * @memberof Contact
     */
    mobile?: string;
    /**
     * 2 letter Country ISO code
     * @type {string}
     * @memberof Contact
     */
    nationality?: string;
    /**
     * landline phone number
     * @type {string}
     * @memberof Contact
     */
    phone?: string;
    /**
     * @type {Salutation}
     * @memberof Contact
     */
    salutation?: Salutation;
    /**
     * @type {Title}
     * @memberof Contact
     */
    title?: Title;
}