import { Student } from './student.model';
import { HttpClient } from '@angular/common/http';
import { StudentService } from './student.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {forkJoin, Observable} from 'rxjs';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],

})

export class StudentComponent implements OnInit {
  Studentt ?: Student[];
  constructor(private route:ActivatedRoute,private router:Router,private studentservice:StudentService,
    ){}

  ngOnInit() {
     this.GetAll();
  }

  GetAll():void{
    this.studentservice.getStudents()
    .subscribe({
      next: (data) => {
        this.Studentt=data;
        console.log(data);
      },
      error:(e)=>console.log(e)

    });
  }

  onEdit(id:number){

  }


}
