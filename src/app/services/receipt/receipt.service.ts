import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LayoutContainerComponent } from 'src/app/modules/order-checkout/layout/layout-container/layout-container.component';
import { ReceiptActions } from 'src/app/store/actions/receipt.actions';
import { ProductsStateModel } from 'src/app/store/state/products.state';
import { BillingInfo, PaymentInfo, ShippingInfo } from 'src/app/store/state/receipt.state';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor(
    private store$: Store<ProductsStateModel>,
  ) {}

  updateShippingInfo(shippingInfo: ShippingInfo): void {
    this.store$.dispatch(ReceiptActions.updateShippingInfo({shippingInfo}));
    LayoutContainerComponent.stepsCounter = LayoutContainerComponent.stepsCounter+1;
  }

  updateBillingInfo(billingInfo: BillingInfo): void {
    this.store$.dispatch(ReceiptActions.updateBillingInfo({billingInfo}));
    LayoutContainerComponent.stepsCounter = LayoutContainerComponent.stepsCounter+1;
  }

  updatePaymentInfo(paymentInfo: PaymentInfo): void {
    this.store$.dispatch(ReceiptActions.updatePaymentInfo({paymentInfo}));
    LayoutContainerComponent.stepsCounter = LayoutContainerComponent.stepsCounter+1;
  }

  returnToShippingPage(): void {
    LayoutContainerComponent.stepsCounter = LayoutContainerComponent.stepsCounter-1;
  }

  returnToBillingPage(): void {
    LayoutContainerComponent.stepsCounter = LayoutContainerComponent.stepsCounter-1;
  }
}
