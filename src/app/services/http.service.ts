import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://api.punkapi.com/v2/beers';

  getBeers(){
    return this.http.get(this.baseUrl);
  }
}
