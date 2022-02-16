import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Constants } from 'src/app/constants/constants';
import { ReceiptService } from 'src/app/services/receipt/receipt.service';

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

  visaDetected: boolean;
  destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private fb: FormBuilder,
    private receiptService: ReceiptService,
    ) { }

  ngOnInit(): void {
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
