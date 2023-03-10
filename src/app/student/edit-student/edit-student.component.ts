import { Student } from './../student.model';
import { StudentService } from './../student.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit  {
  constructor(private route:ActivatedRoute,private studentservice:StudentService){}
  StudentId;
  student:Student=new Student();
  ngOnInit() {
    this.StudentId = this.route.snapshot.paramMap.get('id');
   this.studentservice.getStudentById(this.StudentId)
    .subscribe({
      next: (data) => {
        this.student=data;
      },
      error:(e)=>console.log(e)
    });
  }

  Update(){

  }
}
