import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{

firstObs!:Subscription;


  constructor( ) { }

  ngOnDestroy(): void {
      console.log("ngOnDestroy")
      this.firstObs.unsubscribe()
  }

  ngOnInit(): void {
    // this.firstObs=interval(1000).subscribe(resp=>{
    //   console.log(resp)
    // })

    // Custom Obser..

    const customObs=Observable.create((resp:any)=>{
      let count=0;
        setInterval(()=>{
          resp.next(count)
          if(count==4){
            resp.complete()
          }
          if(count>4){
            resp.error(new Error("Count is greater then 4"))
          }
          count++;
        },1000)
    });


    // customObs.pipe(map((resp:any)=>{
    //     return "Count" +resp;
    // }))



    customObs.pipe(map((resp:any)=>{
      return "Count" +resp;
    })).
  subscribe((resp:any)=>{
      console.log(resp)
    },(error:Error)=>{
      console.log("Error")
    },()=>{
      console.log("Complete")
    })


  }

}
