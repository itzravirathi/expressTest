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
    BrandType,
    CategoryType,
    ClassType,
    HlrldType,
    PurposeType,
} from './';

/**
 * @export
 * @interface GetMsisdnsRequest
 */
export interface GetMsisdnsRequest {
    /**
     * @type {BrandType}
     * @memberof GetMsisdnsRequest
     */
    brand: BrandType;
    /**
     * @type {CategoryType}
     * @memberof GetMsisdnsRequest
     */
    category: CategoryType;
    /**
     * @type {ClassType}
     * @memberof GetMsisdnsRequest
     */
    _class?: ClassType;
    /**
     * @type {HlrldType}
     * @memberof GetMsisdnsRequest
     */
    hlrld: HlrldType;
    /**
     * @type {number}
     * @memberof GetMsisdnsRequest
     */
    numOfMsisdns: number;
    /**
     * @type {string}
     * @memberof GetMsisdnsRequest
     */
    pattern?: string;
    /**
     * @type {PurposeType}
     * @memberof GetMsisdnsRequest
     */
    purpose: PurposeType;
}
