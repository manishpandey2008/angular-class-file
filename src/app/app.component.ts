import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-demo';
  originalData:any;
  visibalData:any;

  isView=false

  arr:any[]=[
    {label:"Option 1",val:"1"},
    {label:"Option 2",val:"2"},
    {label:"Option 3",val:"3"},
    {label:"Option 4",val:"4"}
  ];

  selectOption(val:any){
    this.originalData=val.val;
    this.visibalData=val.label;
    this.isView=false
  }


}
