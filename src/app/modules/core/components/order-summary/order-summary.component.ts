import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectProducts } from 'src/app/store/selectors/products.selectors';
import { Product, ProductsStateModel } from 'src/app/store/state/products.state';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {

  products$: Observable<Product[]> = this.store$.pipe(select(selectProducts))
  
  constructor(private store$: Store<ProductsStateModel>) { }

  ngOnInit(): void { }

}
