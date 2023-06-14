import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../service/api-call.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
  formData:any;
  constructor(private apicall:ApiCallService){

  }
  ngOnInit() {
   this.displayFormData()
  }
  displayFormData(){
   
  this.apicall.getData("data").subscribe((response:any)=>{
    if(response && response.length>0){
      this.formData=response;
    }
  },error=>{

  })
  }


}
export interface regFormData{
  Name:string;
  Address:string;
  country:string;
  state:string;
  city:string;
  pincode:number;
  phone:string;
  email:string;
  
}
