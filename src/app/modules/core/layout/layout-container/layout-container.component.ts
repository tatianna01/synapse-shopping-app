import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { successSelector } from 'src/app/store/selectors/receipt.selectors';
import { ReceiptStateModel } from 'src/app/store/state/receipt.state';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss']
})
export class LayoutContainerComponent implements OnInit {

  success$: Observable<boolean> = this.store$.pipe(select(successSelector));

  constructor(private store$: Store<ReceiptStateModel>) { }

  ngOnInit(): void { }

}
