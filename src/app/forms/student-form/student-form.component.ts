import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  // formData=new FormControl();

  // formGroup=new FormGroup({
  //   studentName:new FormControl(''),
  //   studentClass:new FormControl(),
  //   isStoreInfo: new FormControl(false),
  //   gender:new FormControl('male')
  // });


  formGrop=new FormGroup({
    studentNames:new FormArray([])
  })


  constructor() { }

  ngOnInit(): void {
  }

  getVal(){
    // console.log(this.formGroup.value)

    console.log(this.formGrop.value)
  }

  get names():FormArray{
    return this.formGrop.get('studentNames') as FormArray;
  }



  addNewField(){
    // let arr:FormArray= this.formGrop.get('studentNames') as FormArray;
    this.names.push(new FormControl(''));
  }
}
