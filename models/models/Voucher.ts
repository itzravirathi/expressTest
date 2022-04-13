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
    VoucherStatus,
} from './';

/**
 * @export
 * @interface Voucher
 */
export interface Voucher {
    /**
     * @type {string}
     * @memberof Voucher
     */
    voucherIdentifier?: string;
    /**
     * @type {string}
     * @memberof Voucher
     */
    validFrom?: string;
    /**
     * @type {string}
     * @memberof Voucher
     */
    validTo?: string;
    /**
     * @type {VoucherStatus}
     * @memberof Voucher
     */
    voucherStatus?: VoucherStatus;
}