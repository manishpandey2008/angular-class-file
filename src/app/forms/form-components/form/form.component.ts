import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formGroup=new FormGroup({
    studentName:new FormControl(''),
    studentClass:new FormControl(),
    isStoreInfo: new FormControl(false),
    gender:new FormControl('male')
  });

  tableHeader=[
    { label:"S.No",field:"id"},
    { label:"Student Name",field:"studentName"},
    { label:"Student Class",field:"studentClass"},
    { label:"Student Store Info",field:"isStoreInfo"},
    { label:"Student Gender",field:"gender"}
  ]
  studentData:any[]=[]

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.api.get('student').subscribe((resp:any)=>{
      this.studentData=resp
    })
  }

  addData(){
     this.api.post('student',this.formGroup.value).subscribe(resp=>{
        this.getData()
        this.formGroup.reset();
      })
  }

  deleteItem(id:any){
    this.api.delete('student',id).subscribe(resp=>{
      console.log(resp)
      this.getData()
    })
  }

}
