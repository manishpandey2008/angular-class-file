import { Component, OnInit } from "@angular/core";
import { TestService } from "../test.service";

@Component({
  selector:'app-test',
  templateUrl:'test.component.html',
})
export class TestComponent  implements OnInit{

  constructor( private testService:TestService){

  }

  ngOnInit(): void {
    let x=this.testService.fun(10,30);
    console.log(x)
  }

}
