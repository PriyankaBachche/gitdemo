import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

   baseURL="http://localhost:3000/";
  constructor(private http:HttpClient) {  }
  getData(endpoint:string){
  const url=this.baseURL+ endpoint;
      return this.http.get(url )
  }
  saveData(endpoint:string,body:any){
    const url=this.baseURL+endpoint;
    return this.http.post(url,body)

  }
}
