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
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    LineCheckEligibility,
    LineCheckForModificationRequest,
    LineCheckForNewActivationRequest,
} from '../models';

export interface PerformLineCheckForModificationRequest {
    body: LineCheckForModificationRequest;
}

export interface PerformLineCheckForNewActivationRequest {
    body: LineCheckForNewActivationRequest;
}

/**
 * no description
 */
export class LineCheckApi extends BaseAPI {

    /**
     * Perform LineCheck For Modification
     * PerformLineCheckForModification
     */
    performLineCheckForModification({ body }: PerformLineCheckForModificationRequest): Observable<LineCheckEligibility>
    performLineCheckForModification({ body }: PerformLineCheckForModificationRequest, opts?: OperationOpts): Observable<RawAjaxResponse<LineCheckEligibility>>
    performLineCheckForModification({ body }: PerformLineCheckForModificationRequest, opts?: OperationOpts): Observable<LineCheckEligibility | RawAjaxResponse<LineCheckEligibility>> {
        throwIfNullOrUndefined(body, 'body', 'performLineCheckForModification');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // Bearer authentication
        };

        return this.request<LineCheckEligibility>({
            url: '/api/linecheck/modification',
            method: 'POST',
            headers,
            body: body,
        }, opts?.responseOpts);
    };

    /**
     * Perform LineCheck For NewActivation
     * PerformLineCheckForNewActivation
     */
    performLineCheckForNewActivation({ body }: PerformLineCheckForNewActivationRequest): Observable<LineCheckEligibility>
    performLineCheckForNewActivation({ body }: PerformLineCheckForNewActivationRequest, opts?: OperationOpts): Observable<RawAjaxResponse<LineCheckEligibility>>
    performLineCheckForNewActivation({ body }: PerformLineCheckForNewActivationRequest, opts?: OperationOpts): Observable<LineCheckEligibility | RawAjaxResponse<LineCheckEligibility>> {
        throwIfNullOrUndefined(body, 'body', 'performLineCheckForNewActivation');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // Bearer authentication
        };

        return this.request<LineCheckEligibility>({
            url: '/api/linecheck/activation',
            method: 'POST',
            headers,
            body: body,
        }, opts?.responseOpts);
    };

}
