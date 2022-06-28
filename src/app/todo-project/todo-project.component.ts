import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-project',
  templateUrl: './todo-project.component.html',
  styleUrls: ['./todo-project.component.css']
})
export class TodoProjectComponent implements OnInit {


  name={label:'Student name',placeHolder:'Enter student name',type:"text"};
  mobile={label:'Student phone number',placeHolder:'Enter student phone number',type:"text"}
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

  tableHeader=[
    { label:"Student Phone",field:"phone"},
    { label:"Student Name",field:"name"},
    { label:"Student Class",field:"class"}
  ]

  // studentData:any[]=[]
  studentData:{name:string,phone:string,class:string}[]=[]

  studentObj={name:"",phone:"",class:""};


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
    let map:string[]=this.studentData.map(e=>e.phone);
    if(!map.includes(this.studentObj.phone)){
      this.studentData.push(this.studentObj)
      this.studentObj={name:"",phone:"",class:""};
    }
  }


  deleteStudent(id:any){
    let map:string[]=this.studentData.map(e=>e.phone);

    console.log(map)

    console.log(map.indexOf(id))
    // [2,5,7,8,0,7,7]
    // arr.splice(2,3) => [2,5,7,7]

    this.studentData.splice(map.indexOf(id),1);
  }


}
