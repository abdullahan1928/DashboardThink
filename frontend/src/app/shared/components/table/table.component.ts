import { AfterViewInit, Component, ViewChild, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { StudentService } from 'src/app/services/student/student.service';
import { IStudent } from 'src/app/models/StudentFormFields';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit, AfterViewInit {

  constructor(private _liveAnnouncer: LiveAnnouncer, public http: HttpClient, public studentService: StudentService) { }
  // public student: IStudent[] = [];
  dataSource: any = [];

  ngOnInit(): void {
    this.studentService.displayedColumns.push('admissionDate');
    console.log(this.studentService.displayedColumns);
    // console.log(this.dataSource);
    this.getAllStudent();
  }

  getAllStudent() {
    this.studentService.getStudents().subscribe((data: any) => {
      // this.dataSource = new MatTableDataSource(data);
      this.dataSource = data.data;
      console.log(this.dataSource);
    }
    );
  }


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
