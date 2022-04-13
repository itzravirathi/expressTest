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
    EligibilityStatus,
    EligibilitySummaryInfo,
    RequestType,
    ServicePlanEligibleProduct,
    ServiceSubType,
    ServiceType,
} from './';

/**
 * @export
 * @interface EligibilityGroup
 */
export interface EligibilityGroup {
    /**
     * @type {EligibilityStatus}
     * @memberof EligibilityGroup
     */
    status: EligibilityStatus;
    /**
     * @type {RequestType}
     * @memberof EligibilityGroup
     */
    requestType: RequestType;
    /**
     * @type {ServiceType}
     * @memberof EligibilityGroup
     */
    serviceType: ServiceType;
    /**
     * @type {ServiceSubType}
     * @memberof EligibilityGroup
     */
    serviceSubType: ServiceSubType;
    /**
     * @type {Array<ServicePlanEligibleProduct>}
     * @memberof EligibilityGroup
     */
    servicePlanEligibleProducts?: Array<ServicePlanEligibleProduct>;
    /**
     * @type {EligibilitySummaryInfo}
     * @memberof EligibilityGroup
     */
    eligibilitySummaryInfo?: EligibilitySummaryInfo;
}
