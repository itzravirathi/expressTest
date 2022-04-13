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
    AccessReference,
    AccessStatus,
    BillingMethod,
    LayerCoverage,
    LineCheckAddress,
    LineSegment,
    LineSpeed,
    OtoIdState,
    PlannedUpgrade,
    StartPoint,
    Technology,
    TimeSlot,
} from './';

/**
 * @export
 * @interface EligibleAccess
 */
export interface EligibleAccess {
    /**
     * @type {AccessReference}
     * @memberof EligibleAccess
     */
    access: AccessReference;
    /**
     * @type {LineCheckAddress}
     * @memberof EligibleAccess
     */
    address?: LineCheckAddress;
    /**
     * @type {Technology}
     * @memberof EligibleAccess
     */
    technology: Technology;
    /**
     * @type {AccessStatus}
     * @memberof EligibleAccess
     */
    status: AccessStatus;
    /**
     * @type {StartPoint}
     * @memberof EligibleAccess
     */
    startPoint?: StartPoint;
    /**
     * @type {LineSpeed}
     * @memberof EligibleAccess
     */
    maxSpeed: LineSpeed;
    /**
     * @type {string}
     * @memberof EligibleAccess
     */
    currentDnType?: string;
    /**
     * @type {Array<TimeSlot>}
     * @memberof EligibleAccess
     */
    timeSlot: Array<TimeSlot>;
    /**
     * @type {string}
     * @memberof EligibleAccess
     */
    lri?: string;
    /**
     * @type {string}
     * @memberof EligibleAccess
     */
    networkId?: string;
    /**
     * @type {BillingMethod}
     * @memberof EligibleAccess
     */
    billingMethod?: BillingMethod;
    /**
     * @type {OtoIdState}
     * @memberof EligibleAccess
     */
    otoIdState?: OtoIdState;
    /**
     * @type {boolean}
     * @memberof EligibleAccess
     */
    preOrderable: boolean;
    /**
     * @type {boolean}
     * @memberof EligibleAccess
     */
    alwaysOn: boolean;
    /**
     * @type {string}
     * @memberof EligibleAccess
     */
    lexId?: string;
    /**
     * @type {string}
     * @memberof EligibleAccess
     */
    serId?: string;
    /**
     * @type {string}
     * @memberof EligibleAccess
     */
    evcOvcEndpointId?: string;
    /**
     * @type {string}
     * @memberof EligibleAccess
     */
    serfunction?: string;
    /**
     * @type {string}
     * @memberof EligibleAccess
     */
    subscriberDomain?: string;
    /**
     * @type {string}
     * @memberof EligibleAccess
     */
    connectionPoint?: string;
    /**
     * @type {Array<LineSegment>}
     * @memberof EligibleAccess
     */
    lineSegment?: Array<LineSegment>;
    /**
     * @type {Array<LayerCoverage>}
     * @memberof EligibleAccess
     */
    coverage?: Array<LayerCoverage>;
    /**
     * @type {Array<PlannedUpgrade>}
     * @memberof EligibleAccess
     */
    plannedUpgrades?: Array<PlannedUpgrade>;
    /**
     * @type {string}
     * @memberof EligibleAccess
     */
    technologyType?: string;
    /**
     * @type {string}
     * @memberof EligibleAccess
     */
    addressType?: EligibleAccessAddressTypeEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum EligibleAccessAddressTypeEnum {
    T1 = 'T1',
    T3 = 'T3'
}
