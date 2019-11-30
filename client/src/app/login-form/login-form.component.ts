import { Component, OnInit } from '@angular/core';
import { EmploginService } from '../emplogin.service';
import { Globals as global } from '../../assets/data/globals'
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

    private router: Router,
    private _snackbar: MatSnackBar) { }

  ngOnInit() {
    //this.global.role = "Balaji";
  }

  onSubmit() {
    if (this.username == "admin" && this.password == "admin") {
      let appuserinfo;
      let key = {
        appuserid: 1,
        appuseremail: "admin@sigtech.co.uk",
        appusername: "Admin",
        appuserrole: 1,
        appuserlogin: true
      }
      localStorage.setItem(appuserinfo, JSON.stringify(key));
      this.router.navigate(['/user/dashboard']);
    }
    else if (this.username == "pradeep" && this.password == "pradeep") {
      let appuserinfo;
      let key = {
        appuserid: 2,
        appuseremail: "pradeep@sigtech.co.uk",
        appusername: "Pradeep",
        appuserrole: 2,
        appuserlogin: true
      }
      localStorage.setItem(appuserinfo, JSON.stringify(key));

      this.router.navigate(['/user/dashboard']);
    }
    else if (this.username == "poonam" && this.password == "poonam") {
      let appuserinfo;
      let key = {
        appuserid: 3,
        appuseremail: "poonam.mittal@sigtech.co.uk",
        appusername: "Poonam",
        appuserrole: 3,
        appuserlogin: true
      }
      localStorage.setItem(appuserinfo, JSON.stringify(key));

      this.router.navigate(['/user/dashboard']);
    }
    else if (this.username == "rittika" && this.password == "rittika") {
      let appuserinfo;
      let key = {
        appuserid: 4,
        appuseremail: "rittika.parmar@sigtech.co.uk",
        appusername: "Rittika",
        appuserrole: 3,
        appuserlogin: true
      }
      localStorage.setItem(appuserinfo, JSON.stringify(key));

      this.router.navigate(['/user/dashboard']);
    }

    else if (this.username == "urmila" && this.password == "urmila") {
      let appuserinfo;
      let key = {
        appuserid: 5,
        appuseremail: "urmila.chavan@sigtech.co.uk",
        appusername: "Urmila",
        appuserrole: 3,
        appuserlogin: true
      }
      localStorage.setItem(appuserinfo, JSON.stringify(key));

      this.router.navigate(['/user/dashboard']);
    }
    else {

      global.id = 50;
      global.email = "";
      global.username = "";
      global.role = 50;
      global.login = false;
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
