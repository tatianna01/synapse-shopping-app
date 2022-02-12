import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutContainerComponent } from './layout/layout-container/layout-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    LayoutContainerComponent,
    OrderFormComponent,
    OrderSummaryComponent,
    ProductComponent,
  ],
  exports: [LayoutContainerComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CoreModule { }
