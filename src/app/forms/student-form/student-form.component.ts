import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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



  constructor() { }

  ngOnInit(): void {
  }




  //  formGrop=new FormGroup({
  //   studentNames:new FormArray([])
  // })
  // get names():FormArray{
  //   return this.formGrop.get('studentNames') as FormArray;
  // }
  // addNewField(){
  //   //let arr:FormArray= this.formGrop.get('studentNames') as FormArray;
  //   this.names.push(new FormControl(''));
  // }


  // formGrop=new FormGroup({
  //   schoolName:new FormControl(''),
  //   studentDetails:new FormArray([])
  // })

  // get details():FormArray{
  //   return this.formGrop.get('studentDetails') as FormArray;
  // }

  // addNewObj(){
  //     let studentData=new FormGroup({
  //       studentName:new FormControl(''),
  //       studentGender:new FormControl('male')
  //     });
  //     this.details.push(studentData);
  // }




  formGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(20)]),
    count:new FormControl(0,Validators.max(10))
  });


  getVal(){
    if(this.formGroup.valid){
      console.log(this.formGroup.value)
    }else{
      alert("Your form is not valid !! :)")
    }
  }

}
