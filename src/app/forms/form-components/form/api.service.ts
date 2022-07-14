import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({providedIn:'root'})
export class ApiService{
    constructor(private http:HttpClient){}

    get(tableName:string):Observable<any>{
      return this.http.get(environment.endPointUrt+tableName);
    }

    post(tableName:string,data:any):Observable<any>{
      return this.http.post(environment.endPointUrt+tableName,data)
    }

    delete(tableName:string,id:any):Observable<any>{
      return this.http.delete(environment.endPointUrt+tableName+"/"+id);
    }
}
