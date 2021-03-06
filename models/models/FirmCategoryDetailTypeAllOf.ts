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
    EligibleRateplanType,
} from './';

/**
 * @export
 * @interface FirmCategoryDetailTypeAllOf
 */
export interface FirmCategoryDetailTypeAllOf {
    /**
     * contract Duration
     * @type {number}
     * @memberof FirmCategoryDetailTypeAllOf
     */
    contractDuration?: number;
    /**
     * contract Duration
     * @type {number}
     * @memberof FirmCategoryDetailTypeAllOf
     */
    renewalDuration?: number;
    /**
     * Total used subscription
     * @type {number}
     * @memberof FirmCategoryDetailTypeAllOf
     */
    usedSubscriptions?: number;
    /**
     * @type {Array<EligibleRateplanType>}
     * @memberof FirmCategoryDetailTypeAllOf
     */
    eligibleProducts?: Array<EligibleRateplanType>;
}
