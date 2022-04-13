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
import { BaseAPI, HttpHeaders, HttpQuery, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    VoucherCampaignResponse,
} from '../models';

export interface GetVoucherRequest {
    lang?: GetVoucherLangEnum;
}

export interface GetVoucherBaseonCartRequest {
    cartId: string;
    bundleNo: number;
    lang?: GetVoucherBaseonCartLangEnum;
}

export interface ValidateVoucherRequest {
    voucherId: string;
    lang?: ValidateVoucherLangEnum;
}

/**
 * no description
 */
export class VoucherApi extends BaseAPI {

    /**
     * Get voucher
     * Get Redeemable voucher
     */
    getVoucher({ lang }: GetVoucherRequest): Observable<VoucherCampaignResponse>
    getVoucher({ lang }: GetVoucherRequest, opts?: OperationOpts): Observable<RawAjaxResponse<VoucherCampaignResponse>>
    getVoucher({ lang }: GetVoucherRequest, opts?: OperationOpts): Observable<VoucherCampaignResponse | RawAjaxResponse<VoucherCampaignResponse>> {

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // Bearer authentication
        };

        const query: HttpQuery = {};

        if (lang != null) { query['lang'] = lang; }

        return this.request<VoucherCampaignResponse>({
            url: '/api/vouchers',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * Get voucher
     * Get Redeemable voucher
     */
    getVoucherBaseonCart({ cartId, bundleNo, lang }: GetVoucherBaseonCartRequest): Observable<VoucherCampaignResponse>
    getVoucherBaseonCart({ cartId, bundleNo, lang }: GetVoucherBaseonCartRequest, opts?: OperationOpts): Observable<RawAjaxResponse<VoucherCampaignResponse>>
    getVoucherBaseonCart({ cartId, bundleNo, lang }: GetVoucherBaseonCartRequest, opts?: OperationOpts): Observable<VoucherCampaignResponse | RawAjaxResponse<VoucherCampaignResponse>> {
        throwIfNullOrUndefined(cartId, 'cartId', 'getVoucherBaseonCart');
        throwIfNullOrUndefined(bundleNo, 'bundleNo', 'getVoucherBaseonCart');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // Bearer authentication
        };

        const query: HttpQuery = {};

        if (lang != null) { query['lang'] = lang; }

        return this.request<VoucherCampaignResponse>({
            url: '/api/vouchers/withBundles/{cartId}/{bundleNo}'.replace('{cartId}', encodeURI(cartId)).replace('{bundleNo}', encodeURI(bundleNo)),
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * Validate voucher
     * Get Redeemable voucher
     */
    validateVoucher({ voucherId, lang }: ValidateVoucherRequest): Observable<VoucherCampaignResponse>
    validateVoucher({ voucherId, lang }: ValidateVoucherRequest, opts?: OperationOpts): Observable<RawAjaxResponse<VoucherCampaignResponse>>
    validateVoucher({ voucherId, lang }: ValidateVoucherRequest, opts?: OperationOpts): Observable<VoucherCampaignResponse | RawAjaxResponse<VoucherCampaignResponse>> {
        throwIfNullOrUndefined(voucherId, 'voucherId', 'validateVoucher');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // Bearer authentication
        };

        const query: HttpQuery = {};

        if (lang != null) { query['lang'] = lang; }

        return this.request<VoucherCampaignResponse>({
            url: '/api/vouchers/validate/{voucherId}'.replace('{voucherId}', encodeURI(voucherId)),
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

}

/**
 * @export
 * @enum {string}
 */
export enum GetVoucherLangEnum {
    EN = 'en',
    DE = 'de',
    FR = 'fr',
    IT = 'it'
}
/**
 * @export
 * @enum {string}
 */
export enum GetVoucherBaseonCartLangEnum {
    EN = 'en',
    DE = 'de',
    FR = 'fr',
    IT = 'it'
}
/**
 * @export
 * @enum {string}
 */
export enum ValidateVoucherLangEnum {
    EN = 'en',
    DE = 'de',
    FR = 'fr',
    IT = 'it'
}