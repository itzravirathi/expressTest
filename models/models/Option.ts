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
    OptionType,
} from './';

/**
 * @export
 * @interface Option
 */
export interface Option {
    /**
     * @type {string}
     * @memberof Option
     */
    name?: string;
    /**
     * @type {number}
     * @memberof Option
     */
    value?: number;
    /**
     * @type {OptionType}
     * @memberof Option
     */
    type?: OptionType;
    /**
     * @type {Array<AccessReference>}
     * @memberof Option
     */
    access?: Array<AccessReference>;
}
