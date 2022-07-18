import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  constructor(private http:HttpClient) { }

  // apiJson=[
  //   {
  //     studentName:"Abcde",
  //     classId: 2,
  //     schoolId:"schoo1@123"
  //   },
  //   {
  //     studentName:"Abcde",
  //     classId: 2,
  //     schoolId:"schoo1@123"
  //   }
  // ]

  tableHeader=[
    { label:"Student Name",field:"studentName"},
    { label:"School Name",field:"schoolId"},
    { label:"Class name",field:"classId"},
  ]

  studentData:any;

  date=new Date()

  ngOnInit(): void {
    this.http.get("../../../assets/pipe/student.json").subscribe((resp:any)=>{
      this.studentData=resp.studentList
    })

    // let arr=[1,2,3,4,5,6,7,8,9];
    // let arr2=arr.filter(e=>e%2==0);
    // let map=arr.map(e=>e*10);
    // console.log(map)
  }

}
