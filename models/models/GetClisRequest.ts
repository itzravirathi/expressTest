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
    ClassType,
} from './';

/**
 * @export
 * @interface GetClisRequest
 */
export interface GetClisRequest {
    /**
     * @type {string}
     * @memberof GetClisRequest
     */
    areaCode: string;
    /**
     * @type {ClassType}
     * @memberof GetClisRequest
     */
    _class?: ClassType;
    /**
     * @type {number}
     * @memberof GetClisRequest
     */
    numOfClis: number;
    /**
     * @type {string}
     * @memberof GetClisRequest
     */
    pattern?: string;
}