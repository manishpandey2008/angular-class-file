import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.css']
})
export class FormCheckboxComponent implements OnInit {

  @Input() formGroup!:FormGroup;
  @Input() fieldName:any;

  constructor() { }

  ngOnInit(): void {
  }

}
