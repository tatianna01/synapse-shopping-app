import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { NgxPrintModule } from 'ngx-print';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilterPipe } from 'src/app/pipes/filter/filter.pipe';
import { LayoutContainerComponent } from './layout/layout-container/layout-container.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { ProductComponent } from './components/product/product.component';
import { BillingFormComponent } from './components/billing-form/billing-form.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { SuccessComponent } from './components/success/success.component';
import { ClickOutsideDirective } from 'src/app/directives/click-outside/click-outside.directive';



@NgModule({
  declarations: [
    FilterPipe,
    LayoutContainerComponent,
    OrderFormComponent,
    OrderSummaryComponent,
    ProductComponent,
    BillingFormComponent,
    PaymentFormComponent,
    SuccessComponent,
    ClickOutsideDirective,
  ],
  exports: [LayoutContainerComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgxPrintModule,
    NgxMaskModule.forChild(),
  ]
})
export class OrderCheckoutModule { }
