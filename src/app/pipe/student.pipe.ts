import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'student'
})
export class StudentPipe implements PipeTransform {

  constructor(private https:HttpClient){}

   transform(value: unknown, ...args: unknown[]): Promise<any> {
    let result=""
    if(args[0]=='school'){
      return new Promise((resolve,reject)=>{
        this.https.get("../../assets/pipe/school.json").subscribe((resp: any) => {
          result = resp.schoolList.filter((e: any) => e.schoolId == value)[0].shoolName;
          resolve(result);
        })
      })
    }else{
      return new Promise((resolve,reject)=>{
        this.https.get("../../assets/pipe/class.json").subscribe((resp: any) => {
          result = resp.ClassList.filter((e:any)=>e.classId==value)[0].className;
          resolve(result);
        })
      })
    }
  }

}
