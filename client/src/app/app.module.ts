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

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    LayoutsComponent,
    NavBarDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [EmploginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
