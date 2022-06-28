import { Injectable } from '@angular/core';
import { TextService } from './text.service';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private textService:TextService) { }

  add(num1:number,num2:number):any{
      return num1+num2;
  }

  addArray(arr:number[]):number{
    let sum=0;
    // [1,2,3,4,5,6,7];
    arr.forEach(p=>sum+=p);
    this.textService.writeText("Text service called by add service")
    return sum;
  }

}
