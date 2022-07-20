import { Component, OnInit, ViewChild } from '@angular/core';
import { FormFactoryComponent } from '../form-factory/form-factory.component';
import { FromService } from '../from.service';
import { Entity } from '../model/entity';

@Component({
  selector: 'app-form-call',
  templateUrl: './form-call.component.html',
  styleUrls: ['./form-call.component.css']
})
export class FormCallComponent implements OnInit {

  @ViewChild(FormFactoryComponent) form!:FormFactoryComponent;

  entity!:Entity;

  constructor(private fromService:FromService) { }

  ngOnInit(): void {

  }

  getdata(){
    this.fromService.fileProvider('class').subscribe((resp:Entity)=>{
      this.entity=resp;
      this.form.showForm(resp)
    })


  }

  closeForm(){
    this.form.hideForm()
  }

}
