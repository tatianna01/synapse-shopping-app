import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { billingInfoSelector, paymentInfoSelector, shippingInfoSelector } from 'src/app/store/selectors/receipt.selectors';
import { BillingInfo, PaymentInfo, ReceiptStateModel, ShippingInfo } from 'src/app/store/state/receipt.state';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  shippingInfo$: Observable<ShippingInfo> = this.store$.pipe(select(shippingInfoSelector));
  billingInfo$: Observable<BillingInfo> = this.store$.pipe(select(billingInfoSelector));
  paymentInfo$: Observable<PaymentInfo> = this.store$.pipe(select(paymentInfoSelector));

  constructor(private store$: Store<ReceiptStateModel>) { }

  ngOnInit(): void {}
}
