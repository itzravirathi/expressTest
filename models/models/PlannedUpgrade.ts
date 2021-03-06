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
    LineSpeed,
    PlannedUpgradeType,
} from './';

/**
 * @export
 * @interface PlannedUpgrade
 */
export interface PlannedUpgrade {
    /**
     * @type {PlannedUpgradeType}
     * @memberof PlannedUpgrade
     */
    type?: PlannedUpgradeType;
    /**
     * @type {string}
     * @memberof PlannedUpgrade
     */
    date?: string;
    /**
     * @type {string}
     * @memberof PlannedUpgrade
     */
    comment?: string;
    /**
     * @type {LineSpeed}
     * @memberof PlannedUpgrade
     */
    expectedSpeed?: LineSpeed;
}
