import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  isView=true;
  n=1

  classId=2
  styleId=2

  students=[
    {
      id:1,
      name:"Name 1",
      class:" Class 1"
    },
    {
      id:2,
      name:"Name 2",
      class:" Class 2"
    },
    {
      id:3,
      name:"Name 3",
      class:" Class 3"
    },
    {
      id:4,
      name:"Name 4",
      class:" Class 4"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
