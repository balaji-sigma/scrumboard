import { Component, OnInit } from '@angular/core';
import { EmploginService } from '../emplogin.service';


@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})


export class LayoutsComponent implements OnInit {

  public opened: boolean = true;

  public menu = [];

  apanel: boolean = false;

  constructor(private _sidemenuservice: EmploginService) { }

  ngOnInit() {
    this._sidemenuservice.getsidemenu().subscribe(data => this.menu = data)
  }

  changedis(opened) {
    this.opened = opened;
    console.log(this.menu);
  }
}
