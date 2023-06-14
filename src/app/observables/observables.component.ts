import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit{
  ngOnInit(): void {
    // console.log("Promises start");
    // var prms= new Promise((resolve, reject)=>{
    //   console.log("promise  is getting executed");
    //   setTimeout(() => {
    //     resolve(100);
    //   }, 2000); 
    // })
    // console.log("Promise is in progress");
    // prms.then((response:any)=>{
    //   console.log("promise is executed");
    //   console.log(response);
    // })
    // console.log("Promise ends");
   console.log("Line 1")
    var obs=new Observable((observer:any)=>{
        observer.next(100);
        //setTimeout(()=>{observer.next(200)},3000);
        observer.next(200);
        observer.next(300); 
        // observer.error("error");
        observer.next(400);
        observer.complete();
    }).pipe(filter((el:any)=>el>200),map((el:any)=>el-10));
    console.log("Line 2")
    obs.subscribe(
      (value1:any)=>{
        console.log(value1);
      },
      (error:any)=>{
        console.log("page not found",error)
      },
      ()=>{
        console.log("completed")
      })
      console.log("Line 3")
  }

}
