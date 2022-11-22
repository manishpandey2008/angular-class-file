import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-base-control',
  template: '',
})
export abstract  class BaseControlComponent implements ControlValueAccessor {

  onChange=(a:any)=>{}
  onTouch=()=>{}
  // onValidationChange =(a:any) => {};

  abstract writeValue(obj: any):void;
  // abstract validate(control: AbstractControl):ValidationErrors|null;

  registerOnChange(fn: any): void {
    this.onChange=fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch=fn;
  }

  // registerOnValidatorChange?(fn:any): void {
  //   this.onValidationChange=fn
  // }
}
