import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmploginService } from './emplogin.service';
import { from } from 'rxjs';

import { RoutingComponents } from './app-routing.module';
import { LayoutsComponent } from './layouts/layouts.component';
import { NavBarDashComponent } from './nav-bar-dash/nav-bar-dash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { DashnotiService } from './dashnoti.service';
import { DashusService } from './dashus.service';
import { DashblService } from './dashbl.service';
import { DashmsService } from './dashms.service';
import { Globals } from '../assets/data/globals';
import { MeetingsComponent } from './meetings/meetings.component'
import { MeetingsService } from './meetings.service';
import { DaistandmeetdialogComponent } from './daistandmeetdialog/daistandmeetdialog.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { KnewtaskService } from './knewtask.service';
import { MovetaskComponent } from './movetask/movetask.component';
import { MovetaskserService } from './movetaskser.service';
import { AddfileComponent } from './addfile/addfile.component';
import { AddcommentComponent } from './addcomment/addcomment.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { NewuserComponent } from './newuser/newuser.component';
import { NewprojserviceService } from './newprojservice.service';
import { NewuserserviceService } from './newuserservice.service';
import { ProjectsComponent } from './projects/projects.component';
import { ProjserviceService } from './projservice.service';
import { DiasprintplanComponent } from './diasprintplan/diasprintplan.component';
import { DiasprintretroComponent } from './diasprintretro/diasprintretro.component';
import { SprintplanserviceService } from './sprintplanservice.service';
import { SprintretroserviceService } from './sprintretroservice.service';
import { DailstanmeetserviceService } from './dailstanmeetservice.service';
import { MeetingmainComponent } from './meetingmain/meetingmain.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    LayoutsComponent,
    NavBarDashComponent,
    MeetingsComponent,
    DaistandmeetdialogComponent,
    TasksComponent,
    TaskNewComponent,
    MovetaskComponent,
    AddfileComponent,
    AddcommentComponent,
    NewprojectComponent,
    NewuserComponent,
    ProjectsComponent,
    DiasprintplanComponent,
    DiasprintretroComponent,
    MeetingmainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    Globals,
    EmploginService,
    DashnotiService,
    DashusService,
    DashblService,
    DashmsService,
    MeetingsService,
    KnewtaskService,
    MovetaskserService,
    NewprojserviceService,
    NewuserserviceService,
    ProjserviceService,
    SprintplanserviceService,
    SprintretroserviceService,
    DailstanmeetserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
