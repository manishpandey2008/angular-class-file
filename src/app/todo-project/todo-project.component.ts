import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-project',
  templateUrl: './todo-project.component.html',
  styleUrls: ['./todo-project.component.css']
})
export class TodoProjectComponent implements OnInit {


  name={label:'Student name',placeHolder:'Enter student name'};
  mobile={label:'Student phone number',placeHolder:'Enter student phone number'}
  classDta=[
    {label:'Class 1',value:'1'},
    {label:'Class 2',value:'2'},
    {label:'Class 3',value:'3'},
    {label:'Class 4',value:'4'},
    {label:'Class 5',value:'5'},
    {label:'Class 6',value:'6'},
    {label:'Class 7',value:'7'},
    {label:'Class 8',value:'8'},
    {label:'Class 9',value:'9'}
  ]

  // studentData:any[]=[]
  studentData:{name:string,phone:string,class:string}[]=[]

  studentObj={name:"",phone:"",class:""};

  // 78y698

  constructor() { }

  ngOnInit(): void {
  }

  catch(event:any,state:any){
      if(state=='name'){
        this.studentObj.name=event;
      }else if(state=='mobile'){
        this.studentObj.phone=event;
      }else if(state=='class'){
        this.studentObj.class=event;
      }
  }


  addStudent(){
    this.studentData.push(this.studentObj)
    this.studentObj={name:"",phone:"",class:""};
  }


}
