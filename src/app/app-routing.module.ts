import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { StudentComponent } from "./student/student.component";

const approute:Routes=[
  {path:'',component:HomeComponent},
  {path:'student',component:StudentComponent,children:[
    {path:':id/edit',component:EditStudentComponent}
  ]}

]
@NgModule({
  imports:[
    RouterModule.forRoot(approute)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
