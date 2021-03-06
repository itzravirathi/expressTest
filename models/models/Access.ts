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
    AccessDescriptor,
    Option,
} from './';

/**
 * @export
 * @interface Access
 */
export interface Access {
    /**
     * @type {string}
     * @memberof Access
     */
    tspId?: string;
    /**
     * @type {AccessDescriptor}
     * @memberof Access
     */
    accessType?: AccessDescriptor;
    /**
     * @type {Array<Option>}
     * @memberof Access
     */
    options?: Array<Option>;
    /**
     * @type {boolean}
     * @memberof Access
     */
    best?: boolean;
    /**
     * @type {Array<string>}
     * @memberof Access
     */
    devices?: Array<string>;
}
