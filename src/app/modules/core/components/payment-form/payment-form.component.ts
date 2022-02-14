import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants } from 'src/app/constants/constants';
import { ReceiptService } from 'src/app/services/receipt/receipt.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {

  paymentForm = this.fb.group({
    cardholderName: ['', [Validators.required, Validators.pattern(Constants.LETTERS_REGEX)]],
    cardNumber: ['', [Validators.required]],
    expireDate: ['', [Validators.required, Validators.pattern(Constants.CREDIT_CARD_DATE)]],
    securityCode: ['', [Validators.required, Validators.pattern(Constants.NUMBERS_REGEX)]],
  });
  
  constructor(
    private fb: FormBuilder,
    private receiptService: ReceiptService,
    ) { }

  ngOnInit(): void {
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
}
