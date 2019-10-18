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


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    LayoutsComponent,
    NavBarDashComponent,
    MeetingsComponent,
    DaistandmeetdialogComponent,
    TasksComponent,
    TaskNewComponent
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
    MeetingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
