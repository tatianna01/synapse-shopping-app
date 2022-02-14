import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingGuard } from './guards/billing/billing.guard';
import { PaymentGuard } from './guards/payment/payment.guard';
import { SuccessGuard } from './guards/success/success.guard';
import { BillingFormComponent } from './modules/core/components/billing-form/billing-form.component';
import { OrderFormComponent } from './modules/core/components/order-form/order-form.component';
import { PaymentFormComponent } from './modules/core/components/payment-form/payment-form.component';
import { SuccessComponent } from './modules/core/components/success/success.component';

const routes: Routes = [
  { path: '', redirectTo: 'shipping', pathMatch: 'full'},
  { path: 'shipping', component: OrderFormComponent },
  { path: 'billing', component: BillingFormComponent, canActivate: [BillingGuard] },
  { path: 'payment', component: PaymentFormComponent, canActivate: [PaymentGuard] },
  { path: 'success', component: SuccessComponent, canActivate: [SuccessGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
