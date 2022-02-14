import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { successSelector } from 'src/app/store/selectors/receipt.selectors';
import { ReceiptStateModel } from 'src/app/store/state/receipt.state';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SuccessGuard implements CanActivate {

  success$: Observable<boolean> = this.store$.pipe(select(successSelector));

  constructor(private store$: Store<ReceiptStateModel>) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.success$.pipe(map((res: boolean) => res === true));
  }
  
}
