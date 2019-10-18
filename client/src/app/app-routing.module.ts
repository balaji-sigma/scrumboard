import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginFormComponent } from './login-form/login-form.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { DaistandmeetdialogComponent } from './daistandmeetdialog/daistandmeetdialog.component'
import { TasksComponent } from './tasks/tasks.component';
import { TaskNewComponent } from './task-new/task-new.component';


const routes: Routes = [
  {
    path: 'user',
    component: LayoutsComponent,
    children: [
      {
        path: 'meetings',
        component: MeetingsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'tasks',
        component: TasksComponent
      }
    ]
  },
  { path: '', component: LoginFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  entryComponents: [DaistandmeetdialogComponent, TaskNewComponent],
})
export class AppRoutingModule { }

export const RoutingComponents = [
  LoginFormComponent,
  LayoutsComponent,
  DashboardComponent,
  MeetingsComponent,
  DaistandmeetdialogComponent,
  TasksComponent
];
