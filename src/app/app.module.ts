import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student/student.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HomeComponent,
    EditStudentComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
