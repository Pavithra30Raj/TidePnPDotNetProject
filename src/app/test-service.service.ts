import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  private url = 'https://localhost:7073/WeatherForecast';

  constructor(private httpClient: HttpClient) { }

  //getEmployees() {
    //return "Hello world";
//}

getEmployees(){
  return this.httpClient.get(this.url, { observe: 'response', responseType: 'json'  } )
    //.pipe(map((resp: any) => resp.json()),
      //catchError(error => this.throwError(error))  
}

throwError(error: any) {
  console.error(error);
  return error;
}
}
