import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  getData(){
    console.log(this.formGroup.value)
  }

}
