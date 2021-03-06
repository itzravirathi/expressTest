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
    ActionType,
    CalculatedPrice,
    KeyValuePairType,
    PartClassification,
    PartSubType,
    PartType,
} from './';

/**
 * @export
 * @interface LineItemType
 */
export interface LineItemType {
    /**
     * @type {ActionType}
     * @memberof LineItemType
     */
    actionType: ActionType;
    /**
     * @type {Array<KeyValuePairType>}
     * @memberof LineItemType
     */
    attributes?: Array<KeyValuePairType>;
    /**
     * calulcated amount
     * @type {number}
     * @memberof LineItemType
     */
    calculatedAmount?: number;
    /**
     * @type {Array<LineItemType>}
     * @memberof LineItemType
     */
    childItems?: Array<LineItemType>;
    /**
     * @type {CalculatedPrice}
     * @memberof LineItemType
     */
    calculatedPrice?: CalculatedPrice;
    /**
     * name of offer
     * @type {string}
     * @memberof LineItemType
     */
    name: string;
    /**
     * description of campaigninfo
     * @type {string}
     * @memberof LineItemType
     */
    description?: string;
    /**
     * @type {PartClassification}
     * @memberof LineItemType
     */
    partClassification?: PartClassification;
    /**
     * @type {PartSubType}
     * @memberof LineItemType
     */
    partSubType?: PartSubType;
    /**
     * @type {PartType}
     * @memberof LineItemType
     */
    partType?: PartType;
}
