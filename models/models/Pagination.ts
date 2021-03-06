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
 * @interface Pagination
 */
export interface Pagination {
    /**
     * @type {number}
     * @memberof Pagination
     */
    currentPage?: number;
    /**
     * @type {number}
     * @memberof Pagination
     */
    pageSize?: number;
    /**
     * @type {string}
     * @memberof Pagination
     */
    sort?: string;
    /**
     * @type {number}
     * @memberof Pagination
     */
    totalPages?: number;
    /**
     * @type {number}
     * @memberof Pagination
     */
    totalResults?: number;
}
