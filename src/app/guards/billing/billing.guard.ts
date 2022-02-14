import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { shippingInfoFilledSelector } from 'src/app/store/selectors/receipt.selectors';
import { ReceiptStateModel } from 'src/app/store/state/receipt.state';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BillingGuard implements CanActivate {

  shippingInfoFilled$: Observable<boolean> = this.store$.pipe(select(shippingInfoFilledSelector));

  constructor(private store$: Store<ReceiptStateModel>) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.shippingInfoFilled$.pipe(map((res: boolean) => res === true));
  }
  
}
