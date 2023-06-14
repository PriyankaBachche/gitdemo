import { Component, OnInit } from '@angular/core';
import { UserListUsingAPIService } from '../service/user-list-using-api.service';

@Component({
  selector: 'app-user-list-using-api',
  templateUrl: './user-list-using-api.component.html',
  styleUrls: ['./user-list-using-api.component.css']
})
export class UserListUsingAPIComponent implements OnInit {
  userList:userlist[]=[];
  constructor(private http:UserListUsingAPIService){

  }
  ngOnInit(): void {
    this.getUserListFromAPI();
  }
  flag!:boolean;
  isActive:boolean=true;
 
  setFlag(){
    this.flag=true;
  }
  getUserListFromAPI(){
    this.http.getUsers().subscribe((response:any)=>{
      // if (response && response.length>0){
        this.userList=response.data;
        console.log(this.userList)
      // }
    })
  }

}
export interface userlist{
  id:number
  email:string;
  first_name:string;
  last_name:string;
  avatar:ImageData;
}
