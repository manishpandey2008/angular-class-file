import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormArray, FormControl, FormGroup, FormGroupDirective, NgForm, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';
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
  ],
  // viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class DetailsComponent extends BaseControlComponent implements OnInit {


  @Input() range=[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER]

  details=new FormGroup({
      village:new FormControl(''),
      post:new FormControl(''),
      arr:new FormArray([])
  })

  constructor(private rootFormGroup: FormGroupDirective) {
    super();
   }

  ngOnInit(): void {
      let self=this;
      self.details.valueChanges.subscribe(data=>{
        self.onChange(data)
        if(this.details.invalid){
          // this.parentGrp.setErrors({'invalid': true})
          this.rootFormGroup.control.setErrors
        }
        // // self.onValidationChange()
      })
  }

  addData(){
    let tempFormArr=this.details.get('arr') as FormArray;
    let tempFormGroup=new FormGroup({
      field1:new FormControl('',[Validators.required,Validators.min(this.range[0]),Validators.max(this.range[1])]),
      field2:new FormControl('',Validators.required)
    })
    tempFormArr.push(tempFormGroup);
  }

  get arr():FormArray{
    return this.details.get('arr') as FormArray;
  }

  writeValue(obj: any): void {

  }

  // validate(control: AbstractControl): ValidationErrors | null {

  //   if (control?.invalid) {
  //     return { invalid: true };
  //   } else {
  //     return null;
  //   }
  // }

}
