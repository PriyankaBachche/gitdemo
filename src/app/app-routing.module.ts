import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AssHwComponent } from './ass-hw/ass-hw.component';
import { FormDataComponent } from './form-data/form-data.component';

const routes: Routes = [
  {path:'user-list',component:UserListComponent},
  {path:'create-user',component:CreateUserComponent},
  {path:'updateUser/:id',component:CreateUserComponent},
  {path:'',redirectTo:'/user-list',pathMatch:"full"}
  // {path:'regForm',component:AssHwComponent},
  // {path:'formData',component:FormDataComponent},
  // {path:'',redirectTo:'regForm',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
