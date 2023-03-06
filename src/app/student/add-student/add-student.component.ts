import { Student } from './../student.model';
import { StudentService } from './../student.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  providers:[Student]
})
export class AddStudentComponent {
constructor(private studentService:StudentService,private data:Student){}
@ViewChild('firstname') firstname:ElementRef;
@ViewChild('lastname') lasttname:ElementRef;
@ViewChild('date') datetname:ElementRef;
student:Student=new Student();
submitted=false;
savestudent(){
  this.student.nom=this.firstname.nativeElement.value;
  this.student.prenom=this.lasttname.nativeElement.value;
  this.student.datedenaissance=this.datetname.nativeElement.value;
  console.log(this.student.nom+"     "+this.student.prenom+"     "+this.student.datedenaissance);
  this.submitted=true;
  this.AddStudent();
}





  AddStudent():void{
    this.studentService.AddStudent(this.student)
    .subscribe(data=>console.log(data),error=>console.log(error) );
  }

}
