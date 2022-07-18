import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FromService } from '../from.service';
import { Entity } from '../model/entity';
import { Field } from '../model/firld';
import { Validation } from '../model/validation';

@Component({
  selector: 'app-form-factory',
  templateUrl: './form-factory.component.html',
  styleUrls: ['./form-factory.component.css']
})
export class FormFactoryComponent implements OnInit {

  isView=false

  entity!:Entity;

  formGroup=new FormGroup({});

  constructor() { }

  ngOnInit(): void {

  }

  //  formGroup=new FormGroup({
  //   studentName:new FormControl(''),
  //   studentClass:new FormControl(),
  //   isStoreInfo: new FormControl(false),
  //   gender:new FormControl('male')
  // });


  showForm(data:Entity){
      this.entity=data;
      this.formMeker(data)
      this.isView=true;
  }

  hideForm(){
    this.isView=false;
  }


  formMeker(jsonData:Entity){
      const tempFormGroup=new FormGroup({});
      jsonData.fieldList.forEach((field:Field)=>{
          const formControl= new FormControl(field.defultVal);
          // if(field.validation){
          //   this.addValidation(field.validation,formControl)
          // }
          tempFormGroup.addControl(field.fieldName,formControl)
      })
      this.formGroup=tempFormGroup;
  }

  addValidation(validationList:Validation,formControl:FormControl){
    let arr:any[]=[]
    if(validationList.maxLength)arr.push(Validators.maxLength(validationList.maxLength))
    if(validationList.required)arr.push(Validators.required)
    if(validationList.min)arr.push(Validators.min(validationList.min))
    formControl.addValidators(arr);
  }



  getData(){
      console.log(this.formGroup.value)
  }
}
