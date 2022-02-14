import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Constants } from 'src/app/constants/constants';
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';
import { ReceiptService } from 'src/app/services/receipt/receipt.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit, OnDestroy {

  readonly constants: typeof Constants = Constants;
  readonly countryList = Constants.countryList;
  destroy$: Subject<boolean> = new Subject<boolean>();

  detectGeoClicked = true;
  profileForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern(Constants.LETTERS_REGEX)]],
    daytimePhone: ['', Validators.required],
    road: ['', [Validators.required, Validators.pattern(Constants.LETTERS_REGEX)]],
    optionalGeoInfo: [''],
    city: ['', [Validators.required, Validators.pattern(Constants.LETTERS_REGEX)]],
    country: ['', Validators.required],
    postcode: ['', [Validators.required, Validators.pattern(Constants.NUMBERS_REGEX)]]
  });

  constructor(
    private fb: FormBuilder,
    private geoService: GeolocationService,
    private receiptService: ReceiptService
    ) { }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.profileForm.invalid) {
      this.checkValidation(this.profileForm);
    } else {
      if(!this.countryList.includes(this.profileForm.get('country').value)){
        this.profileForm.get('country').setErrors({'incorrect': true});
        this.profileForm.get('country').markAsTouched();
      } else {
        this.receiptService.updateShippingInfo(this.profileForm.value);
      }
    }
  }

  private checkValidation(form: FormGroup): void {
    Object.keys(form.controls).forEach(key => {
      form.get(key).markAsTouched();
    });
  }
  
  onDetectFocus(): void {
    if(!navigator.geolocation) {
      console.log('location not supported');
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        this.geoService.locationDecode(position.coords.latitude, position.coords.longitude, (res) => {
          this.detectGeoClicked = !this.detectGeoClicked;
          this.profileForm.patchValue(res.address);
        })   
      }, (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        alert('You have denied geolocation!');
      })
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
