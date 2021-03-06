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
    DiscountSourceType,
} from './';

/**
 * @export
 * @interface DevicePlanDiscount
 */
export interface DevicePlanDiscount {
    /**
     * @type {number}
     * @memberof DevicePlanDiscount
     */
    discountAmount?: number;
    /**
     * @type {number}
     * @memberof DevicePlanDiscount
     */
    discountPercentage?: number;
    /**
     * @type {number}
     * @memberof DevicePlanDiscount
     */
    discountedFinalInstallment?: number;
    /**
     * @type {number}
     * @memberof DevicePlanDiscount
     */
    discountedMonthlyPayment?: number;
    /**
     * @type {number}
     * @memberof DevicePlanDiscount
     */
    modifiedUpfrontPayment?: number;
    /**
     * @type {DiscountSourceType}
     * @memberof DevicePlanDiscount
     */
    sourceType?: DiscountSourceType;
}
