import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from './model/entity';

@Injectable({
  providedIn: 'root'
})
export class FromService {

  constructor(private http:HttpClient) { }

  fileProvider(fileName:string):Observable<any>{
    return this.http.get("../../../assets/forms/"+fileName+".json");
  }
}
