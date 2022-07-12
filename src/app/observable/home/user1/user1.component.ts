import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  onClick(){
    // this.userService.eventEmmiter.emit(true)

    this.userService.subject.next(true)
  }

}
