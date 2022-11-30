import { Component } from '@angular/core';
import { IStudent } from 'src/app/models/StudentFormFields';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent {
  constructor(public studentService: StudentService) { }

  data!: IStudent[] | any[];

  ngOnInit() {
    // this.studentService.getStudents().subscribe((data) => {
    //   this.data = data as any;
    // });
  }
}
