import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';
import { TextService } from '../text.service';

@Component({
  selector: 'app-service-test',
  templateUrl: './service-test.component.html'
})
export class ServiceTestComponent implements OnInit {

  constructor(private addService:AddService,private textServic:TextService) { }

  num1:any=0;
  num2:any=0;
  sumOfNumbers:any;

  ngOnInit(): void {
    let arr:number[]=[1,2,3,4,5,6,7];
    let output=this.addService.addArray(arr);
    console.log(output)
    this.textServic.writeText("Text service called by Service Component")
  }

  catch(event:number,numType:any){
      if(numType=='num1')this.num1=event;
      if(numType=='num2')this.num2=event;
  }

  addTwoNums(){
    this.sumOfNumbers=this.addService.add(parseInt(this.num1),parseInt(this.num2));
    // this.sumOfNumbers=this.addService.add(this.num1,this.num2);
  }


}
