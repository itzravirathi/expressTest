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
    EntitlementIcon,
} from './';

/**
 * @export
 * @interface Entitlement
 */
export interface Entitlement {
    /**
     * @type {string}
     * @memberof Entitlement
     */
    code?: string;
    /**
     * @type {string}
     * @memberof Entitlement
     */
    description?: string;
    /**
     * @type {string}
     * @memberof Entitlement
     */
    entitlementDescription?: string;
    /**
     * @type {string}
     * @memberof Entitlement
     */
    entitlementGroup?: string;
    /**
     * @type {string}
     * @memberof Entitlement
     */
    entitlementGroupName?: string;
    /**
     * @type {number}
     * @memberof Entitlement
     */
    entitlementGroupPosition?: number;
    /**
     * @type {number}
     * @memberof Entitlement
     */
    entitlementPosition?: number;
    /**
     * @type {string}
     * @memberof Entitlement
     */
    entitlementFeatures?: string;
    /**
     * @type {string}
     * @memberof Entitlement
     */
    entitlementName?: string;
    /**
     * @type {string}
     * @memberof Entitlement
     */
    unit?: string;
    /**
     * @type {string}
     * @memberof Entitlement
     */
    value?: string;
    /**
     * @type {boolean}
     * @memberof Entitlement
     */
    entitlementGroupHighlight?: boolean;
    /**
     * @type {string}
     * @memberof Entitlement
     */
    entitlementGroupToolTip?: string;
    /**
     * @type {EntitlementIcon}
     * @memberof Entitlement
     */
    entitlementIcon?: EntitlementIcon;
    /**
     * @type {string}
     * @memberof Entitlement
     */
    entitlementToolTip?: string;
    /**
     * @type {string}
     * @memberof Entitlement
     */
    entitlementGroupDescription?: string;
    /**
     * @type {EntitlementIcon}
     * @memberof Entitlement
     */
    entitlementGroupIcon?: EntitlementIcon;
    /**
     * @type {boolean}
     * @memberof Entitlement
     */
    visible?: boolean;
}