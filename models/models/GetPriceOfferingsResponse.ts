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
    CalculatedPrice,
    ProductPriceOfferResponseType,
} from './';

/**
 * @export
 * @interface GetPriceOfferingsResponse
 */
export interface GetPriceOfferingsResponse {
    /**
     * @type {CalculatedPrice}
     * @memberof GetPriceOfferingsResponse
     */
    calculatedTotalPrice?: CalculatedPrice;
    /**
     * @type {Array<ProductPriceOfferResponseType>}
     * @memberof GetPriceOfferingsResponse
     */
    products: Array<ProductPriceOfferResponseType>;
}
