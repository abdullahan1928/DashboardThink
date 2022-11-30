import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import StudentFormFields from 'src/app/models/StudentFormFields';

@Injectable({
  providedIn: 'root'
})
export class StudentService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getStudents();
  }

  displayedColumns: string[] = StudentFormFields.map((field) => field.formControlName);

  getStudents() {
    // this.displayedColumns.push('admission date');
    return this.http.get('http://localhost:3000/student/list');
  }
}
