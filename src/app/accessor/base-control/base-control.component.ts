import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-base-control',
  templateUrl: './base-control.component.html',
  styleUrls: ['./base-control.component.css']
})
export abstract  class BaseControlComponent implements ControlValueAccessor {

  onChange = (_: any) => { }

  onTouch = () => { }

  abstract writeValue(obj: any): void;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

}
