import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Student } from './student.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  host="http://localhost:8080/students";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpclient:HttpClient){}
   getStudents():Observable<Student[]>{
     return this.httpclient.get<Student[]>(this.host+'/all');
   }

}
