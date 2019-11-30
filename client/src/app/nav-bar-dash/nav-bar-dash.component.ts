import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DashnotiService } from '../dashnoti.service';
import { Globals as global } from '../../assets/data/globals'

@Component({
  selector: 'app-nav-bar-dash',
  templateUrl: './nav-bar-dash.component.html',
  styleUrls: ['./nav-bar-dash.component.css']
})
export class NavBarDashComponent implements OnInit {

  constructor(private router: Router,
    private _dashnotiService: DashnotiService,
  ) { }

  public notifications = [];
  public count: number = 0;
  public appuserinfo;
  public appuser;

  //public username = localStorage.getItem(AppUserName);

  ngOnInit() {
    this.appuser = JSON.parse(localStorage.getItem(this.appuserinfo));
    //console.log(this.appuser.appuserid);
    this._dashnotiService.getNotification().subscribe(data => {
      this.notifications = data
      this.notifications.forEach((notify) => {
        if (!notify.view) this.count++;
      });
    });


  }

  @Input() opened: boolean;
  @Output() toggleOpen = new EventEmitter();

  changeValue() {
    // You can give any function name
    this.opened = !this.opened;
    this.toggleOpen.emit(this.opened);

  }

  navigateMenu(tag) {
    if (tag === 'logout') {
      try {
        localStorage.clear();
        this.router.navigate(['']);
      }
      catch (e) {
        console.log(e);
      }

    }
  }

}
