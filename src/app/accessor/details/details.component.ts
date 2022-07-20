import { Component, forwardRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlComponent } from '../base-control/base-control.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DetailsComponent),
      multi: true
    }
  ]
})
export class DetailsComponent extends BaseControlComponent implements OnInit {

  details=new FormGroup({
      village:new FormControl(''),
      post:new FormControl('')
  })

  constructor() {
    super();
   }

  ngOnInit(): void {
      let self=this;
      self.details.valueChanges.subscribe(data=>{
        self.onChange(data)
      })
  }

  writeValue(obj: any): void {

  }

}
