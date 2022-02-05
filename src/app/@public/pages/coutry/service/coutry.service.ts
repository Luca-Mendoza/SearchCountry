import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountry } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CoutryService {
  private baseUrl = 'https://restcountries.com/v2';

  get httpParams() {
    const fields = 'name,flag,capital,population,alpha2Code';

    return new HttpParams().set('fields', fields);
  }
  constructor(private http: HttpClient) {}

  searchCoutry(searchTerm: string): Observable<ICountry[]> {
    const url = `${this.baseUrl}/name/${searchTerm}`;

    return this.http.get<ICountry[]>(url, { params: this.httpParams });
  }

  getCoutryAlphaDetail(id: string): Observable<ICountry> {
    const url = `${this.baseUrl}/alpha/${id}`;

    return this.http.get<ICountry>(url);
  }

  searchCapital(searchTerm: string): Observable<ICountry[]> {
    const url = `${this.baseUrl}/capital/${searchTerm}`;

    return this.http.get<ICountry[]>(url, { params: this.httpParams });
  }

  searchRegion(searchTerm: string): Observable<ICountry[]> {
    const url = `${this.baseUrl}/region/${searchTerm}`;

    return this.http.get<ICountry[]>(url, { params: this.httpParams });
  }
}
