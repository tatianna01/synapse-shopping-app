import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Constants } from 'src/app/constants/constants';
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';
import { ReceiptService } from 'src/app/services/receipt/receipt.service';
import { shippingInfoSelector } from 'src/app/store/selectors/receipt.selectors';
import { ReceiptStateModel, ShippingInfo } from 'src/app/store/state/receipt.state';

@Component({
  selector: 'app-billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.scss']
})
export class BillingFormComponent implements OnInit {

  readonly constants: typeof Constants = Constants;
  readonly countryList = Constants.countryList;
  detectGeoClicked = true;

  shippingInfo$: Observable<ShippingInfo> = this.store$.pipe(select(shippingInfoSelector));

  shipInfo: ShippingInfo;

  billingForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern(Constants.LETTERS_REGEX)]],
    email: ['', [Validators.required, Validators.email]],
    road: ['', [Validators.required, Validators.pattern(Constants.LETTERS_REGEX)]],
    optionalGeoInfo: [''],
    city: ['', [Validators.required, Validators.pattern(Constants.LETTERS_REGEX)]],
    country: ['', Validators.required],
    postcode: ['', [Validators.required, Validators.pattern(Constants.NUMBERS_REGEX)]]
  });

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private fb: FormBuilder,
    private geoService: GeolocationService,
    private receiptService: ReceiptService,
    private store$: Store<ReceiptStateModel>,
    ) { }

  ngOnInit(): void {
  }

  onDetectFocus(): void {
    if(!navigator.geolocation) {
      console.log('location not supported');
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        this.geoService.locationDecode(position.coords.latitude, position.coords.longitude, (res) => {
          this.detectGeoClicked = !this.detectGeoClicked;
          this.billingForm.patchValue(res.address);
        })   
      }, (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        alert('You have denied geolocation!');
      })
    }
  }

  onGetShipInfo(): void {
    this.shippingInfo$.subscribe((res) => {
      this.billingForm.patchValue(res);
    })
  }

  onSubmit(): void {
    if (this.billingForm.invalid) {
      this.checkValidation(this.billingForm);
    } else {
      if(!this.countryList.includes(this.billingForm.get('country').value)){
        this.billingForm.get('country').setErrors({'incorrect': true});
        this.billingForm.get('country').markAsTouched();
      } else {
        this.receiptService.updateBillingInfo(this.billingForm.value);
      }
    }
  }

  private checkValidation(form: FormGroup): void {
    Object.keys(form.controls).forEach(key => {
      form.get(key).markAsTouched();
    });
  }
}
