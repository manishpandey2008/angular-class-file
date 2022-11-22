import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { takeUntil } from 'rxjs';
import { BaseControlComponent } from '../base-control/base-control.component';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomComponent),
      multi: true
    }
  ]
})
export class CustomComponent implements ControlValueAccessor  {

  text:string=""

  constructor() {
  }

  changeVal(data:any){
    const self = this;
    this.OnChange(this.text)
  }

  writeValue(obj: any): void {
    if(obj){
      this.text=obj
    }
  }

  OnChange=(a:any)=>{}
  OnTouched=()=>{}

  registerOnChange(fn: any): void {
    this.OnChange=fn
  }
  registerOnTouched(fn: any): void {
    this.OnTouched=fn
  }

}
