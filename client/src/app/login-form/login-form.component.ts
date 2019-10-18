import { Component, OnInit } from '@angular/core';
import { EmploginService } from '../emplogin.service';
import { Globals } from '../../assets/data/globals';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public username = "";
  public password = "";

  constructor(private _emploginService: EmploginService,
    public global: Globals,
    private router: Router,
    private _snackbar: MatSnackBar) { }

  ngOnInit() {
    //this.global.role = "Balaji";
  }

  onSubmit() {
    if (this.username == "admin" && this.password == "admin") {

      this.global.id = 1;
      this.global.email = "admin@sigtech.co.uk";
      this.global.name = "admin";
      this.global.role = 1;
      this.global.login = true;
      this.router.navigate(['/user/dashboard']);
    }
    else if (this.username == "pradeep" && this.password == "pradeep") {
      this.global.id = 2;
      this.global.email = "pradeep@sigtech.co.uk";
      this.global.name = "Pradeep";
      this.global.role = 2;
      this.global.login = true;
      this.router.navigate(['/user/dashboard']);
    }
    else if (this.username == "rittika" && this.password == "rittika") {
      this.global.id = 3;
      this.global.email = "rittika@sigtech.co.uk";
      this.global.name = "Rittika";
      this.global.role = 3;
      this.global.login = true;
      this.router.navigate(['/user/dashboard']);
    }
    else if (this.username == "urmila" && this.password == "urmila") {
      this.global.id = 4;
      this.global.email = "urmila@sigtech.co.uk";
      this.global.name = "Urmila";
      this.global.role = 3;
      this.global.login = true;
      this.router.navigate(['/user/dashboard']);
    }
    else {

      this.global.id = 50;
      this.global.email = "";
      this.global.name = "";
      this.global.role = 50;
      this.global.login = false;
      //this.router.navigate(['/user/dashboard']);

      this.openSnackBar("User Name and Password don't match", "");
    }
  }


  openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.panelClass = ['background-red'];
    config.duration = 5000;
    this._snackbar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top',
      panelClass: 'background-red'
    });
  }

}
