import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Constants } from 'src/app/constants/constants';
import { ReceiptService } from 'src/app/services/receipt/receipt.service';
import { paymentInfoSelector } from 'src/app/store/selectors/receipt.selectors';
import { PaymentInfo, ReceiptStateModel } from 'src/app/store/state/receipt.state';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit, OnDestroy {

  paymentForm = this.fb.group({
    cardholderName: ['', [Validators.required, Validators.pattern(Constants.LETTERS_REGEX)]],
    cardNumber: ['', [Validators.required]],
    expireDate: ['', [Validators.required]],
    securityCode: ['', [Validators.required, Validators.pattern(Constants.NUMBERS_REGEX)]],
  });

  paymentInfo$: Observable<PaymentInfo> = this.store$.pipe(select(paymentInfoSelector));
  
  visaDetected: boolean;
  destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private fb: FormBuilder,
    private receiptService: ReceiptService,
    private store$: Store<ReceiptStateModel>,
    ) { }

  ngOnInit(): void {
    this.paymentInfo$.pipe(takeUntil(this.destroy$)).subscribe((res) => this.paymentForm.patchValue(res));
    this.paymentForm.get('cardNumber').valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(500),
        distinctUntilChanged()
      ).subscribe((val: string) => {
        if(/4[0-9]{12}(?:[0-9]{3})?/.test(val.replace(/\s/g, ''))) {
          this.visaDetected = true;
        } else {
          this.visaDetected = false;
        }
      });
  }

  onSubmit(): void {
    if (this.paymentForm.invalid) {
      this.checkValidation(this.paymentForm);
    } else {
      this.receiptService.updatePaymentInfo(this.paymentForm.value);
    }
  }
  goToBillingForm(): void {
    this.receiptService.returnToBillingPage();
  }

  private checkValidation(form: FormGroup): void {
    Object.keys(form.controls).forEach(key => {
      form.get(key).markAsTouched();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
