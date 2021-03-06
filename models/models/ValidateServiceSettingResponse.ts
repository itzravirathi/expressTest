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
    SimPukStatus,
    ValidateServiceSettingRequestValueType,
} from './';

/**
 * @export
 * @interface ValidateServiceSettingResponse
 */
export interface ValidateServiceSettingResponse {
    /**
     * @type {ValidateServiceSettingRequestValueType}
     * @memberof ValidateServiceSettingResponse
     */
    type?: ValidateServiceSettingRequestValueType;
    /**
     * @type {string}
     * @memberof ValidateServiceSettingResponse
     */
    serviceSerial?: string;
    /**
     * @type {SimPukStatus}
     * @memberof ValidateServiceSettingResponse
     */
    status?: SimPukStatus;
}
