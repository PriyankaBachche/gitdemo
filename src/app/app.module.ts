import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservablesComponent } from './observables/observables.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AssignmentComponent } from './assignment/assignment.component';
import { AssHwComponent } from './ass-hw/ass-hw.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { FormDataComponent } from './form-data/form-data.component';
import { UserListUsingAPIComponent } from './user-list-using-api/user-list-using-api.component'

@NgModule({
  declarations: [
    AppComponent,
    ObservablesComponent,
    CreateUserComponent,
    UserListComponent,
    AssignmentComponent,
    AssHwComponent,
    ProgressBarComponent,
    FormDataComponent,
    UserListUsingAPIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
