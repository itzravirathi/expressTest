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
    ValidateErrorType,
    VoucherValidateErrorCode,
} from './';

/**
 * @export
 * @interface ValidateError
 */
export interface ValidateError {
    /**
     * @type {VoucherValidateErrorCode}
     * @memberof ValidateError
     */
    errorId?: VoucherValidateErrorCode;
    /**
     * @type {ValidateErrorType}
     * @memberof ValidateError
     */
    type?: ValidateErrorType;
}
