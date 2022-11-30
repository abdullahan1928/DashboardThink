import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import StudentFormFields from '../../../models/StudentFormFields';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(public http: HttpClient) { }

  @Input() title: string = 'Form Title';
  @Input() subtitle: string = 'Form Subtitle';

  public studentForm!: FormGroup;

  studentFields = StudentFormFields;

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(11),
        Validators.maxLength(11),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
      date: new FormControl('', [Validators.required]),
    });
  }

  myError = (controlName: string, errorName: string) => {
    return this.studentForm.controls[controlName].hasError(errorName);
  };

  addStudent() {
    this.http
      .post('http://localhost:3000/student/new', this.studentForm.value)
      .subscribe((res) => {
        console.log(res);
      });
  }

}
