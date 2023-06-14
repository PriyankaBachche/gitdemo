import { Component, OnInit } from '@angular/core';
import { Observable, interval, takeWhile } from 'rxjs';
import {timer} from 'rxjs';
@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  width : any=0;
  

  constructor(){
   
  }
  ngOnInit(): void {
    this.runProgressBar();
  }

  runProgressBar(){
   
    interval(100)
    .pipe(
      takeWhile(() => this.isWidthWithinLimit())
    )
    .subscribe(()=>{
      this.width++;
      console.log(this.width);
    })
    
  }

  isWidthWithinLimit(){
    if(this.width===100){
      return false;
    }else{
      return true;
    }
  }
}


