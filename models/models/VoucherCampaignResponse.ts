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
    ValidateError,
    VoucherCampaign,
} from './';

/**
 * @export
 * @interface VoucherCampaignResponse
 */
export interface VoucherCampaignResponse {
    /**
     * @type {Array<VoucherCampaign>}
     * @memberof VoucherCampaignResponse
     */
    campaigns?: Array<VoucherCampaign>;
    /**
     * @type {Array<ValidateError>}
     * @memberof VoucherCampaignResponse
     */
    errors?: Array<ValidateError>;
}
