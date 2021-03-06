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
    AccessName,
    AccessProviderState,
    Accesses,
} from './';

/**
 * @export
 * @interface AccessProviderStatus
 */
export interface AccessProviderStatus {
    /**
     * @type {AccessName}
     * @memberof AccessProviderStatus
     */
    name?: AccessName;
    /**
     * @type {AccessProviderState}
     * @memberof AccessProviderStatus
     */
    state?: AccessProviderState;
    /**
     * @type {Array<Accesses>}
     * @memberof AccessProviderStatus
     */
    accesses?: Array<Accesses>;
}
