import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BillingInfo, PaymentInfo, ReceiptStateModel, ShippingInfo } from "../state/receipt.state";

export const selectReceiptFeature = createFeatureSelector<ReceiptStateModel>('receipt');

export const shippingInfoSelector = createSelector(
    selectReceiptFeature,
    (state: ReceiptStateModel): ShippingInfo => state.shippingInfo
)

export const billingInfoSelector = createSelector(
    selectReceiptFeature,
    (state: ReceiptStateModel): BillingInfo => state.billingInfo
)

export const paymentInfoSelector = createSelector(
    selectReceiptFeature,
    (state: ReceiptStateModel): PaymentInfo => state.paymentInfo
)

export const successSelector = createSelector(
    selectReceiptFeature,
    (state: ReceiptStateModel): boolean => state.success
)

export const shippingInfoFilledSelector = createSelector(
    selectReceiptFeature,
    (state: ReceiptStateModel): boolean => state.shippingInfoFilled
)

export const billingInfoFilledSelector = createSelector(
    selectReceiptFeature,
    (state: ReceiptStateModel): boolean => state.billingInfoFilled
)