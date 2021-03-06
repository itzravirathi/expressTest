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
    LegalAddress,
    Salutation,
    Title,
} from './';

/**
 * @export
 * @interface Addressee
 */
export interface Addressee {
    /**
     * @type {LegalAddress}
     * @memberof Addressee
     */
    address?: LegalAddress;
    /**
     * @type {string}
     * @memberof Addressee
     */
    companyName?: string;
    /**
     * @type {string}
     * @memberof Addressee
     */
    firstName?: string;
    /**
     * @type {string}
     * @memberof Addressee
     */
    lastName?: string;
    /**
     * @type {Salutation}
     * @memberof Addressee
     */
    salutation?: Salutation;
    /**
     * @type {Title}
     * @memberof Addressee
     */
    title?: Title;
}
