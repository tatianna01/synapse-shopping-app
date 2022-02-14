import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { productsReducer } from './reducers/products.reducer';
import { receiptReducer } from './reducers/receipt.reducers';
import { ProductsStateModel } from './state/products.state';
import { ReceiptStateModel } from './state/receipt.state';

export interface State {
  products: ProductsStateModel;
  receipt: ReceiptStateModel;
}

export const reducers: ActionReducerMap<State> = {
  products: productsReducer,
  receipt: receiptReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
