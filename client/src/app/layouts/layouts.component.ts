import { Component, OnInit } from '@angular/core';
import { EmploginService } from '../emplogin.service';
import { Globals } from '../../assets/data/globals'


@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})


export class LayoutsComponent implements OnInit {

  public opened: boolean = true;

  public menu = [];

  public authmenu: boolean;

  apanel: boolean = false;

  constructor(private _sidemenuservice: EmploginService, public global: Globals) { }

  ngOnInit() {
    this._sidemenuservice.getsidemenu().subscribe(data => this.menu = data);
    if (this.global.role == 1 || this.global.role == 2) this.authmenu = true;
    else this.authmenu = false;
  }

  changedis(opened) {
    this.opened = opened;
    console.log(this.menu);
  }
}
