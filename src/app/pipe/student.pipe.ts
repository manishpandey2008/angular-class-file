import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'student'
})
export class StudentPipe implements PipeTransform {

  constructor(private https:HttpClient){}

  schoolList=[
    {
      shoolName:"School 1",
      schoolId:1
    },
    {
      shoolName:"School 2",
      schoolId:2
    },
    {
      shoolName:"School 3",
      schoolId:3
    },
    {
      shoolName:"School 4",
      schoolId:4
    },
    {
      shoolName:"School 5",
      schoolId:5
    }
  ]
  ClassList=[
    {
      className:"Class 1",
      classId:1
    },
    {
      className:"Class 2",
      classId:2
    },
    {
      className:"Class 3",
      classId:3
    },
    {
      className:"Class 4",
      classId:4
    },
    {
      className:"Class 5",
      classId:5
    }
  ]

   transform(value: unknown, ...args: unknown[]): Promise<any> {
    let result=""
    let store:any=[]
    if(args[0]=='school'){
      //  this.https.get("../../assets/pipe/school.json").subscribe((resp: any) => {
      //   store = resp;
      //   // result = resp.schoolList.filter((e: any) => e.schoolId == value)[0].shoolName;
      // })

      return new Promise((resolve,reject)=>{
        this.https.get("../../assets/pipe/school.json").subscribe((resp: any) => {
          result = resp.schoolList.filter((e: any) => e.schoolId == value)[0].shoolName;
          resolve(result);
        })
      })

      // return Promise.resolve( this.schoolList.filter((e: any) => e.schoolId == value)[0].shoolName );
    }else{
      // this.https.get("../../assets/pipe/class.json").subscribe((resp:any)=>{
      //   result=
      //   console.log(result)
      // })

      return new Promise((resolve,reject)=>{
        this.https.get("../../assets/pipe/class.json").subscribe((resp: any) => {
          result = resp.ClassList.filter((e:any)=>e.classId==value)[0].className;
          resolve(result);
        })
      })

      // return Promise.resolve( this.ClassList.filter((e:any)=>e.classId==value)[0].className);
    }
  }

}
