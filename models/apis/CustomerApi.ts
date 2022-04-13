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

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, HttpQuery, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    GetFirmsResponse,
} from '../models';

export interface GetAllFirmsRequest {
    name?: string;
}

/**
 * no description
 */
export class CustomerApi extends BaseAPI {

    /**
     * Get All Firms
     * Get All Firms details
     */
    getAllFirms({ name }: GetAllFirmsRequest): Observable<GetFirmsResponse>
    getAllFirms({ name }: GetAllFirmsRequest, opts?: OperationOpts): Observable<RawAjaxResponse<GetFirmsResponse>>
    getAllFirms({ name }: GetAllFirmsRequest, opts?: OperationOpts): Observable<GetFirmsResponse | RawAjaxResponse<GetFirmsResponse>> {

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // Bearer authentication
        };

        const query: HttpQuery = {};

        if (name != null) { query['name'] = name; }

        return this.request<GetFirmsResponse>({
            url: '/api/customer/firms',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

}