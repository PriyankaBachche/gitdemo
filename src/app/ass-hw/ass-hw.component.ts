import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../pw-validator';
import { ApiCallService } from '../service/api-call.service';

@Component({
  selector: 'app-ass-hw',
  templateUrl: './ass-hw.component.html',
  styleUrls: ['./ass-hw.component.css']
})
export class AssHwComponent implements OnInit {
  regForm!:FormGroup;
  country:string[]=[];
  states:string[]=[];
  countryobj:any={
    "India":["Maharashtra","MadhyaPradesh","Gujrat","Kerala","Punjab"],
    "China":["Jiangsu","Hunan","Yunnan","Fujian"],
    "Australia":["Queensland","Victoria","Tasmania"]
  }
  phoneAbbreviations: { [key: string]: string } = {
    India: '+91',
    China: '+1',
    Australia: '+61'
  };
  phoneAbbreviation:string=""
 

 
   
   countrylist:string[]=Object.keys(this.countryobj)
 
  constructor(private fb:FormBuilder, private http:ApiCallService){}
  ngOnInit(){
    this.createform(),
   
    this.regForm.get("country")?.valueChanges.subscribe((el)=>{
      this.states=this.countryobj[this.regForm.get("country")?.value]
    })

    this.regForm.get('password')?.valueChanges.subscribe((el:any)=>{
      this.regForm.get('confirmpassword')?.updateValueAndValidity();
  })
  this.regForm.get('country')?.valueChanges.subscribe(country => {
    this.phoneAbbreviation = this.phoneAbbreviations[country];
    console.log(this.phoneAbbreviation);
    this.regForm.patchValue({ countrycode: this.phoneAbbreviation });
    this.regForm.get('state')?.setValue('');
  });
}
 
 
  createform(){
    this.regForm=this.fb.group({
      "Name":['',[Validators.required]],
      "Address":['',[Validators.required]],
      "country":['',[Validators.required]],
      "state":['',[Validators.required]],
       "city":['',[Validators.required]],
      "pincode":['',[Validators.required]],
      
      "phone":this.fb.group({
       "phoneno":['',[Validators.required]],
        "countrycode":['',[]]}),
      "email":['',[Validators.required]],
      "password":['',[Validators.required,Validators.pattern]],
      "confirmpassword":['',[Validators.required,passwordValidator]]
    })
  }

  saveform(){
    
    console.log(this.regForm.value);
    this.http.saveData("data",this.regForm.value).subscribe((el:any)=>{
      console.log("data saved in backend");
    });


  }
 
  get Name(){
    return this.regForm.get("Name")
  }
  get address(){
    return this.regForm.get("Address")
  }
  get country1(){
    return this.regForm.get("country")
  }
  get state(){
    return this.regForm.get("state");
  }
  get city(){
    return this.regForm.get("city")
  }
  get pincode(){
    return this.regForm.get("pincode")
  }
  get code(){
    return this.regForm.get("countrycode")
  }
  get phoneno(){
    return this.regForm.get("phoneno")
  }
  get email(){
    return this.regForm.get("email")
  }
  get password(){
    return this.regForm.get("password")
  }
  get confirmpw(){
    return this.regForm.get("confirmpassword")
  }

}
