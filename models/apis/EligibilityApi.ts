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
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    CreditCheckEligibility,
    CreditCheckEligibilityRequest,
    ElectricianEligibility,
    ElectricianEligibilityRequest,
    GetDevicePlanEligibilityRequest,
    GetDevicePlanEligibilityResponse,
    GetEligiblePromotionsRequest,
    GetEligiblePromotionsResponse,
    GetPreToPostEligibilityResponse,
    GetPreToPostEligiblityRequest,
} from '../models';

export interface GetCreditCheckEligibilityRequest {
    body: CreditCheckEligibilityRequest;
}

export interface GetDevicePlanEligiblityRequest {
    body: GetDevicePlanEligibilityRequest;
}

export interface GetElectricianEligibilityRequest {
    body: ElectricianEligibilityRequest;
}

export interface GetEligiblePromotionsRequest {
    cartId: string;
    body: GetEligiblePromotionsRequest;
}

export interface PreToPostEligibilityRequest {
    body: GetPreToPostEligiblityRequest;
}

/**
 * no description
 */
export class EligibilityApi extends BaseAPI {

    /**
     * Electrician Eligibility Check
     * GetCreditCheckEligibility
     */
    getCreditCheckEligibility({ body }: GetCreditCheckEligibilityRequest): Observable<Array<CreditCheckEligibility>>
    getCreditCheckEligibility({ body }: GetCreditCheckEligibilityRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<CreditCheckEligibility>>>
    getCreditCheckEligibility({ body }: GetCreditCheckEligibilityRequest, opts?: OperationOpts): Observable<Array<CreditCheckEligibility> | RawAjaxResponse<Array<CreditCheckEligibility>>> {
        throwIfNullOrUndefined(body, 'body', 'getCreditCheckEligibility');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // Bearer authentication
        };

        return this.request<Array<CreditCheckEligibility>>({
            url: '/api/eligibility/creditCheck',
            method: 'POST',
            headers,
            body: body,
        }, opts?.responseOpts);
    };

    /**
     * Check Second DevicePlan Eligibility
     * GetDevicePlanEligiblity
     */
    getDevicePlanEligiblity({ body }: GetDevicePlanEligiblityRequest): Observable<GetDevicePlanEligibilityResponse>
    getDevicePlanEligiblity({ body }: GetDevicePlanEligiblityRequest, opts?: OperationOpts): Observable<RawAjaxResponse<GetDevicePlanEligibilityResponse>>
    getDevicePlanEligiblity({ body }: GetDevicePlanEligiblityRequest, opts?: OperationOpts): Observable<GetDevicePlanEligibilityResponse | RawAjaxResponse<GetDevicePlanEligibilityResponse>> {
        throwIfNullOrUndefined(body, 'body', 'getDevicePlanEligiblity');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // Bearer authentication
        };

        return this.request<GetDevicePlanEligibilityResponse>({
            url: '/api/eligibility/devicePlan',
            method: 'POST',
            headers,
            body: body,
        }, opts?.responseOpts);
    };

    /**
     * Electrician Eligibility Check
     * GetElectricianEligibility
     */
    getElectricianEligibility({ body }: GetElectricianEligibilityRequest): Observable<Array<ElectricianEligibility>>
    getElectricianEligibility({ body }: GetElectricianEligibilityRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<ElectricianEligibility>>>
    getElectricianEligibility({ body }: GetElectricianEligibilityRequest, opts?: OperationOpts): Observable<Array<ElectricianEligibility> | RawAjaxResponse<Array<ElectricianEligibility>>> {
        throwIfNullOrUndefined(body, 'body', 'getElectricianEligibility');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // Bearer authentication
        };

        return this.request<Array<ElectricianEligibility>>({
            url: '/api/eligibility/electrician',
            method: 'POST',
            headers,
            body: body,
        }, opts?.responseOpts);
    };

    /**
     * GetEligiblePromotions base on cart
     * GetDevicePlanEligiblity
     */
    getEligiblePromotions({ cartId, body }: GetEligiblePromotionsRequest): Observable<GetEligiblePromotionsResponse>
    getEligiblePromotions({ cartId, body }: GetEligiblePromotionsRequest, opts?: OperationOpts): Observable<RawAjaxResponse<GetEligiblePromotionsResponse>>
    getEligiblePromotions({ cartId, body }: GetEligiblePromotionsRequest, opts?: OperationOpts): Observable<GetEligiblePromotionsResponse | RawAjaxResponse<GetEligiblePromotionsResponse>> {
        throwIfNullOrUndefined(cartId, 'cartId', 'getEligiblePromotions');
        throwIfNullOrUndefined(body, 'body', 'getEligiblePromotions');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // Bearer authentication
        };

        return this.request<GetEligiblePromotionsResponse>({
            url: '/api/eligibility/promotions/{cartId}'.replace('{cartId}', encodeURI(cartId)),
            method: 'POST',
            headers,
            body: body,
        }, opts?.responseOpts);
    };

    /**
     * Check Second DevicePlan Eligibility
     * GetDevicePlanEligiblity
     */
    preToPostEligibility({ body }: PreToPostEligibilityRequest): Observable<GetPreToPostEligibilityResponse>
    preToPostEligibility({ body }: PreToPostEligibilityRequest, opts?: OperationOpts): Observable<RawAjaxResponse<GetPreToPostEligibilityResponse>>
    preToPostEligibility({ body }: PreToPostEligibilityRequest, opts?: OperationOpts): Observable<GetPreToPostEligibilityResponse | RawAjaxResponse<GetPreToPostEligibilityResponse>> {
        throwIfNullOrUndefined(body, 'body', 'preToPostEligibility');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
        };

        return this.request<GetPreToPostEligibilityResponse>({
            url: '/api/eligibility/preToPost',
            method: 'POST',
            headers,
            body: body,
        }, opts?.responseOpts);
    };

}
