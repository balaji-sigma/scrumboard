import { Component, OnInit } from '@angular/core';

export interface NewUser {
  first_name?: string;
  last_name?: string;
  username?: string;
  password?: string;
  email?: string;
  role: number;
}

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  constructor() { }

  public newuser = <NewUser>{ role: 3 }

  ngOnInit() {
  }

  onformsubmit() {
    console.log('Hi');
  }

}
