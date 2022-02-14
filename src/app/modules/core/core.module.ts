import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutContainerComponent } from './layout/layout-container/layout-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { NgxMaskModule } from 'ngx-mask';
import { BillingFormComponent } from './components/billing-form/billing-form.component';
import { RouterModule } from '@angular/router';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { SuccessComponent } from './components/success/success.component';

@NgModule({
  declarations: [
    LayoutContainerComponent,
    OrderFormComponent,
    OrderSummaryComponent,
    ProductComponent,
    BillingFormComponent,
    PaymentFormComponent,
    SuccessComponent,
  ],
  exports: [LayoutContainerComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgxMaskModule.forChild(),
  ]
})
export class CoreModule { }
