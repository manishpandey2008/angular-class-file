import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class UserService{
    // eventEmmiter=new EventEmitter<boolean>();

    subject=new Subject<boolean>()
}
