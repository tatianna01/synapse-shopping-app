import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product, ProductsStateModel } from "../state/products.state";

export const selectProductsFeature = createFeatureSelector<ProductsStateModel>('products');

export const selectProducts = createSelector(
    selectProductsFeature,
    (state: ProductsStateModel): Product[] => state.products
)