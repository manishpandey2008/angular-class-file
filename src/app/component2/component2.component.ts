import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @Input('abc') inputData:any;
  @Input() inputData2:any;

  @Output() outputData=new EventEmitter;



  // {val:"Test is text field",color:"text-red-600"}

  constructor() { }

  ngOnInit(): void {
  }

  fun(){
      // console.log("Testing on component 2")
      this.outputData.emit({val:"Test is text field",color:"text-red-600"})
  }

}
