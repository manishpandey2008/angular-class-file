import { Component, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // title = 'angular-demo';
  // arr1:any[]=[
  //   {label:"Option 1",val:"1"},
  //   {label:"Option 2",val:"2"},
  //   {label:"Option 3",val:"3"},
  //   {label:"Option 4",val:"4"}
  // ];

  // arr2:any[]=[
  //   {label:"Item 1",val:"1"},
  //   {label:"Item 2",val:"2"},
  //   {label:"Item 3",val:"3"},
  //   {label:"Item 4",val:"4"}
  // ];

  // formGroup1=new FormGroup({
  //   studentName:new FormControl(''),
  //   select1: new FormControl(''),
  //   select2: new FormControl('')
  // })


  // formGroup2=new FormGroup({
  //   studentName:new FormControl(''),
  //   selectData1: new FormControl(''),
  //   selectData2: new FormControl('')
  // })

  data:any[]=[
    {
      amount:373434,
      currency:"USD"
    },
    {
      amount:876,
      currency:"INR"
    },
    {
      amount:9787898,
      currency:"USD"
    },
    {
      amount:635345434,
      currency:"EUR"
    },
    {
      amount:9898,
      currency:"INR"
    }
  ]
  filterData=this.data;


  fun(event:any){
    this.filterData=this.data.filter(e=>e.currency==event)
  }


}
