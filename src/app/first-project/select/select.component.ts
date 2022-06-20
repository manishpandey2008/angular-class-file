import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() data:any;
  @Output() response=new EventEmitter;

  // {label:'',value:''}

  // classDta=[
  //   {label:'Class 1',value:'1'},
  //   {label:'Class 2',value:'2'},
  //   {label:'Class 3',value:'3'},
  //   {label:'Class 4',value:'4'},
  //   {label:'Class 5',value:'5'},
  //   {label:'Class 6',value:'6'},
  //   {label:'Class 7',value:'7'},
  //   {label:'Class 8',value:'8'},
  //   {label:'Class 9',value:'9'}
  // ]

  storeText:String=""

  constructor() { }

  ngOnInit(): void {
  }

  reflection(){
      this.response.emit(this.storeText)
  }

}
