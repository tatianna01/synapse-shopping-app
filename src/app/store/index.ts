import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { productsReducer } from './reducers/products.reducer';
import { ProductsStateModel } from './state/products.state';

export interface State {
  products: ProductsStateModel;
}

export const reducers: ActionReducerMap<State> = {
  products: productsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
