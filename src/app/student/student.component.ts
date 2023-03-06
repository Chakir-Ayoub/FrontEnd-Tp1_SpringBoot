import { Student } from './student.model';
import { HttpClient } from '@angular/common/http';
import { StudentService } from './student.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {forkJoin, Observable} from 'rxjs';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],

})

export class StudentComponent implements OnInit,OnChanges {
  Studentt ?: Student[];
  id:number;
  constructor(private route:ActivatedRoute,private router:Router,private studentservice:StudentService,
    ){}
  ngOnChanges(changes: SimpleChanges) {
    this.GetAll();
  }

  ngOnInit() {
    this.GetAll();
  }

  GetAll():void{
    this.studentservice.getStudents()
    .subscribe({
      next: (data) => {
        this.Studentt=data;
      },
      error:(e)=>console.log(e)

    });
  }

  Add(){
    this.router.navigate(['Add'], { relativeTo: this.route});
  }
//.subscribe(data=>console.log(data),error=>console.log(error) );
  Remove(id:number){
    this.studentservice.Remove(id)
    .subscribe(data=>console.log(data),error=>console.log(error) );
  }

}
