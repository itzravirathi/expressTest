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
    ShopAddress,
} from './';

/**
 * @export
 * @interface Shop
 */
export interface Shop {
    /**
     * @type {string}
     * @memberof Shop
     */
    shopLocationName?: string;
    /**
     * @type {string}
     * @memberof Shop
     */
    shopManagerEmail?: string;
    /**
     * @type {ShopAddress}
     * @memberof Shop
     */
    shopAddress?: ShopAddress;
}
