import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { billingInfoFilledSelector } from 'src/app/store/selectors/receipt.selectors';
import { ReceiptStateModel } from 'src/app/store/state/receipt.state';

@Injectable({
  providedIn: 'root'
})
export class PaymentGuard implements CanActivate {

  billingInfoFilled$: Observable<boolean> = this.store$.pipe(select(billingInfoFilledSelector));

  constructor(private store$: Store<ReceiptStateModel>) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.billingInfoFilled$.pipe(map((res: boolean) => res === true));
  }
  
}
