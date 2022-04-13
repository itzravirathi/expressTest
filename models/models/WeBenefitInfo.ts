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
 * @export
 * @interface WeBenefitInfo
 */
export interface WeBenefitInfo {
    /**
     * @type {string}
     * @memberof WeBenefitInfo
     */
    productName?: string;
    /**
     * @type {string}
     * @memberof WeBenefitInfo
     */
    name: string;
    /**
     * @type {string}
     * @memberof WeBenefitInfo
     */
    type: WeBenefitInfoTypeEnum;
    /**
     * @type {number}
     * @memberof WeBenefitInfo
     */
    maxAllowed: number;
    /**
     * @type {number}
     * @memberof WeBenefitInfo
     */
    alreadyUsed: number;
    /**
     * @type {Array<string>}
     * @memberof WeBenefitInfo
     */
    productSerials?: Array<string>;
}

/**
 * @export
 * @enum {string}
 */
export enum WeBenefitInfoTypeEnum {
    MOBILE_POSTPAID_SUBSCRIPTION = 'MOBILE_POSTPAID_SUBSCRIPTION',
    MOBILE_POSTPAID_OPTION = 'MOBILE_POSTPAID_OPTION',
    FIXNET_OPTION = 'FIXNET_OPTION',
    SITE_LEVEL_OPTION = 'SITE_LEVEL_OPTION'
}

