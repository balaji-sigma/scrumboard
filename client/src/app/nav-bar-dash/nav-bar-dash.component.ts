import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-dash',
  templateUrl: './nav-bar-dash.component.html',
  styleUrls: ['./nav-bar-dash.component.css']
})
export class NavBarDashComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
        this.router.navigate(['']);
      }
      catch (e) {
        console.log(e);
      }

    }
  }

}
