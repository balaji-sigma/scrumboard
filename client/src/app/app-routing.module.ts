import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginFormComponent } from './login-form/login-form.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { DaistandmeetdialogComponent } from './daistandmeetdialog/daistandmeetdialog.component'
import { TasksComponent } from './tasks/tasks.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { MovetaskComponent } from './movetask/movetask.component';
import { AddfileComponent } from './addfile/addfile.component';
import { AddcommentComponent } from './addcomment/addcomment.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ProjectsComponent } from './projects/projects.component';
import { DiasprintplanComponent } from './diasprintplan/diasprintplan.component';
import { DiasprintretroComponent } from './diasprintretro/diasprintretro.component';


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
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'addproject',
        component: NewprojectComponent
      },
      {
        path: 'adduser',
        component: NewuserComponent
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
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  entryComponents: [
    DaistandmeetdialogComponent,
    TaskNewComponent,
    MovetaskComponent,
    AddcommentComponent,
    DiasprintplanComponent,
    DiasprintretroComponent
  ],
})
export class AppRoutingModule { }

export const RoutingComponents = [
  LoginFormComponent,
  LayoutsComponent,
  DashboardComponent,
  MeetingsComponent,
  DaistandmeetdialogComponent,
  TasksComponent,
  MovetaskComponent,
  AddfileComponent,
  AddcommentComponent,
  NewprojectComponent,
  NewuserComponent,
  ProjectsComponent,
  DiasprintplanComponent,
  DiasprintretroComponent
];
