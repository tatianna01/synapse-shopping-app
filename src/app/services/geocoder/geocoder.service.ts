import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocoderService {

  /**
   * Implementation of the [Nominatim](https://wiki.openstreetmap.org/wiki/Nominatim) geocoder.
   * 
   * [Nominatim Documentation](https://nominatim.org/release-docs/latest/api/Search/)
   * 
   * [Nominatim usage policy](https://operations.osmfoundation.org/policies/nominatim/).
   */
   private static url = 'https://nominatim.openstreetmap.org/';

    /**
   * Reverse geocoding generates an address from a latitude and longitude.
   * 
   * @param http HttpClient instance
   * @param lat latitude
   * @param lon longitude
   * @param lang language code
   * @returns response
   */
  public static reverse(http: HttpClient, lat: number, lon: number, lang: string): Observable<any> {
    return http.get<any>(GeocoderService.url + `reverse`,
      { 
        headers: GeocoderService.getHeaders(lang),
        params: new HttpParams()
          .set('lat', lat)
          .set('lon', lon)
          .set('format', 'json')
      }
    );
  }
  
  /**
   * Generates Accept-Language header with specific language code
   * 
   * @param lang language code
   * @returns HttpHeaders
   */
   private static getHeaders(lang: string): HttpHeaders {
    return new HttpHeaders({
      'Accept-Language': lang
    });
  }
}
