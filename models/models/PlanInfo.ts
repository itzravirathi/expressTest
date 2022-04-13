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
 * @interface PlanInfo
 */
export interface PlanInfo {
    /**
     * start date of device plan
     * @type {string}
     * @memberof PlanInfo
     */
    startDate: string;
    /**
     * end date of device plan
     * @type {string}
     * @memberof PlanInfo
     */
    endDate: string;
    /**
     * Termination date of device plan
     * @type {string}
     * @memberof PlanInfo
     */
    terminationDate?: string;
    /**
     * Earlieast renewal date of device plan
     * @type {string}
     * @memberof PlanInfo
     */
    earliestRenewalDate?: string;
    /**
     * ramining no of installments
     * @type {number}
     * @memberof PlanInfo
     */
    remainingInstalments: number;
    /**
     * ramining no of installment amount
     * @type {number}
     * @memberof PlanInfo
     */
    remainingInstalmentsAmount: number;
    /**
     * paid no of installments
     * @type {number}
     * @memberof PlanInfo
     */
    paidInstalments: number;
    /**
     * paid amount for each installment
     * @type {number}
     * @memberof PlanInfo
     */
    paidInstalmentsAmount: number;
}