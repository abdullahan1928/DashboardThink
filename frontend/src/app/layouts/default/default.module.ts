import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { StudentsComponent } from 'src/app/modules/students/students.component';
import { TasksComponent } from 'src/app/modules/tasks/tasks.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { SettingsComponent } from 'src/app/modules/settings/settings.component';
import { LoginService } from 'src/app/services/login/login.service';
import { NewStudentComponent } from 'src/app/modules/new-student/new-student.component';
import { NewTaskComponent } from 'src/app/modules/new-task/new-task.component';

@NgModule({
  declarations: [
    DefaultComponent,
    LoginComponent,
    DashboardComponent,
    StudentsComponent,
    TasksComponent,
    SettingsComponent,
    NewStudentComponent,
    NewTaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    HttpClientModule,
    MatTabsModule,
  ],
  providers: [DashboardService, LoginService],
})
export class DefaultModule { }
