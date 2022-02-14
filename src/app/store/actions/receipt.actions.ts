import { createAction, props } from "@ngrx/store";
import { BillingInfo, PaymentInfo, ShippingInfo } from "../state/receipt.state";

export namespace ReceiptActions {
    export const updateShippingInfo = createAction(
        '[RECEIPT] update shipping info',
        props<{ shippingInfo: ShippingInfo }>()
    );

    export const updateBillingInfo = createAction(
        '[RECEIPT] update billing info',
        props<{ billingInfo: BillingInfo }>()
    );

    export const updatePaymentInfo = createAction(
        '[RECEIPT] update payment info',
        props<{ paymentInfo: PaymentInfo }>()
    );
}