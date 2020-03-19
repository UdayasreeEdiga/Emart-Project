import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  baseUrl:string;


  constructor(private httpClient :HttpClient) {
    this.baseUrl="http://localhost:9090/users/users";
   }
   getAll() : Observable<Users []>{
    return this.httpClient.get<Users []>(this.baseUrl);
   }
   getById(id:number) : Observable<Users >{ 
    return this.httpClient.get<Users >(`${this.baseUrl}/${id}`);
   }
   add(user:Users ) : Observable<Users >{
     return this.httpClient.post<Users >(this.baseUrl,user);
   }
 
}
