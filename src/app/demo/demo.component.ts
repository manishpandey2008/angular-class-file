import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  // arr=["Test1","Test2","Test3","Test4"]

  type="text"
  val="this is a text"

  test="Test"
  model=""


  isView:boolean=true


  constructor() { }

  ngOnInit(): void {
  }

  fun(){
      console.log(" test event binding")
  }

  change(val:any){
      console.log("This is change binding",val.value)
  }

  toggle(){
    // this.isView=!this.isView
    alert("This is alert !!")


    // this.isView=this.isView?false:true;

      // if(this.isView){
      //   this.isView=false;
      // }else{
      //   this.isView=true;
      // }
  }

}
