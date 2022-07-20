import { Component, forwardRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
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
export class CustomComponent extends BaseControlComponent  {

  text:string=""

  constructor() {
    super();
  }

  changeVal(data:any){
    const self = this;
    self.onChange(data);
  }

  writeValue(obj: any): void {
    if(obj){
      this.text=obj
    }
  }

}
