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
    ServicePlanEligibleStatus,
    SpecialitySegment,
} from './';

/**
 * @export
 * @interface ServicePlanEligibleProduct
 */
export interface ServicePlanEligibleProduct {
    /**
     * @type {string}
     * @memberof ServicePlanEligibleProduct
     */
    earliestStartDate: string;
    /**
     * @type {boolean}
     * @memberof ServicePlanEligibleProduct
     */
    eligible: boolean;
    /**
     * @type {string}
     * @memberof ServicePlanEligibleProduct
     */
    serial: string;
    /**
     * @type {Array<SpecialitySegment>}
     * @memberof ServicePlanEligibleProduct
     */
    specialitySegment: Array<SpecialitySegment>;
    /**
     * @type {ServicePlanEligibleStatus}
     * @memberof ServicePlanEligibleProduct
     */
    status: ServicePlanEligibleStatus;
}