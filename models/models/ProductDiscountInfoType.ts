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
    PartInfoType,
} from './';

/**
 * @export
 * @interface ProductDiscountInfoType
 */
export interface ProductDiscountInfoType {
    /**
     * product Serial
     * @type {string}
     * @memberof ProductDiscountInfoType
     */
    productSerial: string;
    /**
     * @type {Array<PartInfoType>}
     * @memberof ProductDiscountInfoType
     */
    items?: Array<PartInfoType>;
}
