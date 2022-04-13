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
 * @interface PlanType
 */
export interface PlanType {
    /**
     * @type {string}
     * @memberof PlanType
     */
    sapInstalmentId: string;
    /**
     * contract duration
     * @type {number}
     * @memberof PlanType
     */
    duration: number;
    /**
     * no of recurring installments
     * @type {number}
     * @memberof PlanType
     */
    recurringInstallments: number;
    /**
     * Initial/Upfront payment amount
     * @type {number}
     * @memberof PlanType
     */
    totalPrice: number;
    /**
     * amount for each installment
     * @type {number}
     * @memberof PlanType
     */
    monthlyPayment: number;
    /**
     * amount for the final installment
     * @type {number}
     * @memberof PlanType
     */
    finalInstallment: number;
    /**
     * upfront Payment
     * @type {number}
     * @memberof PlanType
     */
    upfrontPayment: number;
    /**
     * upfront buyback
     * @type {number}
     * @memberof PlanType
     */
    upfrontBuyback?: number;
    /**
     * purchase Price
     * @type {number}
     * @memberof PlanType
     */
    purchasePrice?: number;
    /**
     * sap id
     * @type {string}
     * @memberof PlanType
     */
    sapId: string;
    /**
     * @type {string}
     * @memberof PlanType
     */
    description?: string;
    /**
     * serial Number
     * @type {string}
     * @memberof PlanType
     */
    serialNumber?: string;
}