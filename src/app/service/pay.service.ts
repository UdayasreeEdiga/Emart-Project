import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pay } from '../model/pay';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  baseUrl:string;


  constructor(private httpClient :HttpClient) {
    this.baseUrl="http://localhost:9093/pay";
   }
   getAll() : Observable<Pay []>{
    return this.httpClient.get<Pay []>(this.baseUrl);
   }
   getById(cvv:number) : Observable<Pay >{ 
    return this.httpClient.get<Pay >(`${this.baseUrl}/${cvv}`);
   }
   add(payment:Pay) : Observable<Pay>{
     return this.httpClient.post<Pay >(this.baseUrl,payment);
   }
}
