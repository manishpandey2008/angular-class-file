import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-comp',
  templateUrl: './select-comp.component.html',
  styleUrls: ['./select-comp.component.css']
})
export class SelectCompComponent implements OnInit {

  @Input() arr:any;
  @Input() FORMgROUP!:FormGroup
  @Input() fieldName!:any

  @Output() outPut=new EventEmitter;

  visibalData:any;

  isView=false

  ngOnInit(): void {
  }

  selectOption(val:any){
    this.visibalData=val.label;
    this.isView=false
    this.outPut.emit(val.val)
    this.FORMgROUP.value[this.fieldName]=val.val
  }
}
