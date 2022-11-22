import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class UserService{
    // eventEmmiter=new EventEmitter<boolean>();
    subject=new Subject<boolean>()

    protected onser$=new Subject<String>();
    newVar$=this.onser$.asObservable();

    setData(str:string){
      this.onser$.next(str)
    }
}
