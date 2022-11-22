import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  formGroup=new FormGroup({
    studentDetails:new FormControl('',Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(resp=>{
      console.log("888888888888888888888888888888",this.formGroup.valid)
    })
    // let obs=Observable.create((resp:any)=>{
    //   let x=0;
    //   setInterval(()=>{
    //     resp.next(x)
    //     resp.error(new Error("this is error"))
    //     x++;
    //   },1000)
    // })

    // obs.subscribe((resp:any)=>{
    //     console.log(resp)
    // })
  }

}
