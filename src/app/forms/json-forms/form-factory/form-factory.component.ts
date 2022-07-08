import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FromService } from '../from.service';
import { Entity } from '../model/entity';
import { Field } from '../model/firld';

@Component({
  selector: 'app-form-factory',
  templateUrl: './form-factory.component.html',
  styleUrls: ['./form-factory.component.css']
})
export class FormFactoryComponent implements OnInit {


  entity!:Entity;
  isView=false

  formGroup=new FormGroup({});

  constructor(private fromService:FromService) { }

  ngOnInit(): void {
    this.getFile()
  }

  getFile(){
    this.fromService.fileProvider('class').subscribe((resp:Entity)=>{
      this.entity=resp;
      this.formMeker(resp);
      this.isView=true
    })
  }

  formMeker(jsonData:Entity){
      const tempFormGroup=new FormGroup({});
      jsonData.fieldList.forEach((field:Field)=>{
          const formControl= new FormControl(field.defultVal);
          tempFormGroup.addControl(field.fieldName,formControl)
      })
      this.formGroup=tempFormGroup;

      console.log(this.formGroup.value)
  }

}
