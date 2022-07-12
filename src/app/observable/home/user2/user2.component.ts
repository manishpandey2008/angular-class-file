import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {

  isView=false

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    // this.userService.eventEmmiter.subscribe(resp=>{
    //     console.log(resp)
    //     this.isView=resp
    // })

    this.userService.subject.subscribe(resp=>{
        console.log(resp)
        this.isView=resp
    })
  }

}
