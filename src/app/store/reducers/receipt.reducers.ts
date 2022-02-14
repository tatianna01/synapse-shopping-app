import { createReducer, on } from "@ngrx/store";
import { ReceiptActions } from "../actions/receipt.actions";
import { receiptState } from "../state/receipt.state";

export const receiptReducer = createReducer(
    receiptState,
    on(ReceiptActions.updateShippingInfo, (state, { shippingInfo }) => ({
        ...state,
        shippingInfo: shippingInfo,
        shippingInfoFilled: true
    })),
    on(ReceiptActions.updateBillingInfo, (state, { billingInfo }) => ({
        ...state,
        billingInfo: billingInfo,
        billingInfoFilled: true
    })),
    on(ReceiptActions.updatePaymentInfo, (state, { paymentInfo }) => ({
        ...state,
        paymentInfo: paymentInfo,
        success: true
    })),
  );