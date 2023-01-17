import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  @Output() currencyResp=new EventEmitter;

  constructor() { }

  jsonData={val:"Test is text field",color:"text-red-600"};

  ngOnInit(): void {
  }

  comp1Fun(event:any){
      console.log("This is component 1",event)
  }

  fun(currency:any){
    this.currencyResp.emit(currency)
  }

}
