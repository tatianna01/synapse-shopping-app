import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ReceiptActions } from 'src/app/store/actions/receipt.actions';
import { ProductsStateModel } from 'src/app/store/state/products.state';
import { BillingInfo, PaymentInfo, ShippingInfo } from 'src/app/store/state/receipt.state';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor(
    private router: Router,
    private store$: Store<ProductsStateModel>,
  ) { }

  updateShippingInfo(shippingInfo: ShippingInfo): void {
    this.store$.dispatch(ReceiptActions.updateShippingInfo({shippingInfo}));
    this.router.navigate(['/billing']);
  }

  updateBillingInfo(billingInfo: BillingInfo): void {
    this.store$.dispatch(ReceiptActions.updateBillingInfo({billingInfo}));
    this.router.navigate(['/payment']);
  }

  updatePaymentInfo(paymentInfo: PaymentInfo): void {
    this.store$.dispatch(ReceiptActions.updatePaymentInfo({paymentInfo}));
    this.router.navigate(['/success']);
  }
}
