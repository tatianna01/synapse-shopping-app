import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeocoderService } from '../geocoder/geocoder.service';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(private http: HttpClient) { }

  /**
   * translates coords into address
   *
   * @param coords - Coords
   * @param callback - Function, which receives result of locationDecode
   */
   locationDecode(lat: number, lon: number, callback: (arg0: any) => void): void {
    GeocoderService
      .reverse(this.http, lat, lon, 'en')
      .subscribe((result: any) => {
        callback(result);
      });
  }
}
