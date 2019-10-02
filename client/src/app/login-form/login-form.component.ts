import { Component, OnInit } from '@angular/core';
import { EmploginService } from '../emplogin.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public username = "";

  constructor(private _emploginService: EmploginService) { }

  ngOnInit() {
  }

}
