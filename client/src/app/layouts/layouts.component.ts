import { Component, OnInit } from '@angular/core';
import { EmploginService } from '../emplogin.service';
import { Globals as global } from '../../assets/data/globals'


@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})


export class LayoutsComponent implements OnInit {

  public opened: boolean = true;

  public menu = [];

  public authmenu: boolean;
  public appuserinfo;
  public appuser;

  apanel: boolean = false;

  constructor(private _sidemenuservice: EmploginService) { }

  ngOnInit() {
    this.appuser = JSON.parse(localStorage.getItem(this.appuserinfo));
    console.log(this.appuser.appuserrole);
    this._sidemenuservice.getsidemenu().subscribe(data => this.menu = data);
    if (this.appuser.appuserrole == 1 || this.appuser.appuserrole == 2) this.authmenu = true;
    else this.authmenu = false;
  }

  changedis(opened) {
    this.opened = opened;
    console.log(this.menu);
  }
}
