import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

    fun(a:number,b:any):any{
      return a+b;
    }
}
