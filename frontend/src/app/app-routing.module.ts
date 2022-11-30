import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard/auth.guard';
import { DashboardGuard } from './guards/dashboard-guard/dashboard.guard';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginComponent } from './modules/login/login.component';
import { NewStudentComponent } from './modules/new-student/new-student.component';
import { NewTaskComponent } from './modules/new-task/new-task.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { StudentsComponent } from './modules/students/students.component';
import { TasksComponent } from './modules/tasks/tasks.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: LoginComponent,
  //   canActivate: [DashboardGuard],
  // },
  {
    path: '',
    component: DefaultComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'students',
        children: [
          {
            path: '',
            component: StudentsComponent
          },
          {
            path: 'new',
            component: NewStudentComponent
          }
        ]
      },
      {
        path: 'tasks',
        children: [
          {
            path: '',
            component: TasksComponent
          },
          {
            path: 'new',
            component: NewTaskComponent
          }]
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },
  // {
  //   path: '**',
  //   redirectTo: '',
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
