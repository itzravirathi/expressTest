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
 * @interface CalculatedPrice
 */
export interface CalculatedPrice {
    /**
     * @type {number}
     * @memberof CalculatedPrice
     */
    basePrice?: number;
    /**
     * @type {number}
     * @memberof CalculatedPrice
     */
    discount?: number;
    /**
     * @type {number}
     * @memberof CalculatedPrice
     */
    youngDiscount?: number;
    /**
     * @type {number}
     * @memberof CalculatedPrice
     */
    price?: number;
}
