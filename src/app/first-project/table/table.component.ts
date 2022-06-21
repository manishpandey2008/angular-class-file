import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() tableHeader:any;
  @Input() tableData:any;

  @Output() respose=new EventEmitter;


 //  header[  { label:"Student Name",field:"name"} ]

//  tableHeader=[
//   { label:"Student Name",field:"name"},
// { label:"Student Class",field:"class"}
//   { label:"Student Phone",field:"phone"},
//
// ]


// tableData=[{name:string,phone:string,class:string}]

  constructor() { }

  ngOnInit(): void {
  }

  delete(id:any){
    this.respose.emit(id)
  }

}
