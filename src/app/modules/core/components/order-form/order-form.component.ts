import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit, OnDestroy {


  destroy$: Subject<boolean> = new Subject<boolean>();

  detectGeoClicked = true;

  profileForm = this.fb.group({
    fullName: ['', Validators.required],
    daytimePhone: ['', Validators.required],
    road: ['', Validators.required],
    optionalGeoInfo: [''],
    city: ['', Validators.required],
    country: ['', Validators.required],
    postcode: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private geoService: GeolocationService
    ) { }

  ngOnInit(): void { }

  onSubmit(): void {
    this.checkValidation(this.profileForm);
  }

  private checkValidation(form: FormGroup): void {
    Object.keys(form.controls).forEach(key => {
      form.get(key).markAsTouched();
    });
  }
  
  onDetectFocus(): void {
    this.detectGeoClicked = !this.detectGeoClicked;
    if(!navigator.geolocation) {
      console.log('location not supported');
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        this.geoService.locationDecode(position.coords.latitude, position.coords.longitude, (res) => {
          this.profileForm.patchValue(res.address);
        })
      })
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
