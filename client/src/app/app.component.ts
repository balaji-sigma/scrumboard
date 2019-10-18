import { Component, OnInit, AfterViewInit } from '@angular/core';
//import * as $ from "jquery";
//declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})

export class AppComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
    console.log(`jQuery version: ${$.fn.jquery}`);

  }
  ngAfterViewInit(): void {

  }
  title = 'ScrumBoard App';
}

