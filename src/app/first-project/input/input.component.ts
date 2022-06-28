import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() data:any; // {label:'Student name',placeHolder:'Enter student name',type:'number'};
  @Output() response=new EventEmitter;

  storeText:String=""

  constructor() { }

  ngOnInit(): void {
  }

  reflection(){
      this.response.emit(this.storeText)
  }

}
