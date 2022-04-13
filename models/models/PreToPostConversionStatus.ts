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

/**
 * 
 * @export
 * @enum {string}
 */
export enum PreToPostConversionStatus {
    OK = 'OK',
    WRONG_PAYMENT_TYPE = 'WRONG_PAYMENT_TYPE',
    INVALID_PUK = 'INVALID_PUK',
    INVALID_ACCOUNT_STATE = 'INVALID_ACCOUNT_STATE',
    PERIOD_VIOLATED = 'PERIOD_VIOLATED',
    THRESHOLD_VIOLATED = 'THRESHOLD_VIOLATED',
    INCORRECT_SIM = 'INCORRECT_SIM',
    SIM_CHANGE_PENDING = 'SIM_CHANGE_PENDING'
}

