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

/**
 * @export
 * @interface Promotion
 */
export interface Promotion {
    /**
     * @type {string}
     * @memberof Promotion
     */
    title?: string;
    /**
     * @type {string}
     * @memberof Promotion
     */
    code?: string;
    /**
     * @type {number}
     * @memberof Promotion
     */
    contractDuration?: number;
    /**
     * @type {string}
     * @memberof Promotion
     */
    infoText?: string;
    /**
     * @type {string}
     * @memberof Promotion
     */
    infoTitle?: string;
    /**
     * @type {number}
     * @memberof Promotion
     */
    promoDuration?: number;
    /**
     * @type {string}
     * @memberof Promotion
     */
    promoType?: string;
    /**
     * @type {string}
     * @memberof Promotion
     */
    promotionType?: string;
    /**
     * @type {string}
     * @memberof Promotion
     */
    endDate?: string | null;
}
