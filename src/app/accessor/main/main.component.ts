import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  formGroup=new FormGroup({
    studentName:new FormControl(''),
    studentDetails:new FormControl(),
    studentClass:new FormControl(),
    isStoreInfo: new FormControl(false),
    gender:new FormControl('male')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
