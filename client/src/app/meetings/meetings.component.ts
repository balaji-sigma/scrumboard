import { Component, OnInit } from '@angular/core';
import { Globals } from '../../assets/data/globals';
import { MeetingsService } from '../meetings.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DaistandmeetdialogComponent } from '../daistandmeetdialog/daistandmeetdialog.component';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  public meetings = [];
  public newstmeet = "Daily Standup Meeting";
  public appuserinfo;
  public appuser;
  public meetid;
  public meetstatus;
  public mySubscription: any;
  public checked: boolean;

  constructor(public global: Globals, private meeting: MeetingsService,
    public dialog: MatDialog, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }

  ngOnInit() {
    this.meetstatus = false;
    this.checked = true;
    this.appuser = JSON.parse(localStorage.getItem(this.appuserinfo));
    console.log(this.appuser);
    this.meeting.getmeetings().subscribe(data => {
      this.meetings = data;
      console.log(this.meetings);
    });

  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }


  epochtocdate = (d: number): string => {
    let date = new Date(d * 1000);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return (month + '/' + day + '/' + year);

  }

  editdsmeet(event) {
    //console.log(event);
    this.meetstatus = true;

    console.log(event.target.parentElement.attributes);//.id.nodeValue);
    this.meetid = event.target.parentElement.attributes.id.nodeValue;
  }

  checkstatus(status): string {
    if (status == 1) {
      //this.checked = false;
      return 'open';
    }
    else {
      //this.checked = true;
      return 'close';
    }
  }

  changestatus(event) {
    this.meetstatus = true;

    console.log(event.target.firstElementChild.attributes);//.name.nodeValue);
    this.meetid = event.target.firstElementChild.attributes.name.nodeValue;

    var foundIndex = this.meetings.findIndex(x => x.id == this.meetid);
    if (this.meetings[foundIndex].status == 1)
      this.meetings[foundIndex].status = 0;
    else this.meetings[foundIndex].status = 1;
  }

  savedsmeet(event) {

    this.meetstatus = false;
    this.meetid = event.target.parentElement.attributes.id.nodeValue;

    var foundIndex = this.meetings.findIndex(x => x.id == this.meetid);
    //console.log(foundIndex);
    //console.log(event.target.parentElement.attributes.data.value);
    //console.log(this.meetings[foundIndex].desc);
    this.meeting.updatedsmeet(this.meetid, this.meetings[foundIndex].desc, this.meetings[foundIndex].status).subscribe(res => {
      //this.ngOnInit();      
    });
    this.router.navigateByUrl('/dummy', { skipLocationChange: true });
    this.router.navigate(["/user/meetings"]);
    console.log('byeeee');
    //window.location.reload();
  }

  setmeetstatus(event) {
    console.log(event);
    //console.log(event.target.parentElement.attributes.id.nodeValue);
    //console.log(event.target.parentElement.attributes.data.value);
  }

  daistanmeet() {
    let dialogRef = this.dialog.open(DaistandmeetdialogComponent, {
      height: '600px',
      width: '600px',
      data: { newstmeet: this.newstmeet }
    });

    dialogRef.afterClosed().subscribe(result => {
      //this.newstmeet = result;
      console.log(result);
      this.meeting.adddsumeet(result).subscribe(res => {
      });
      console.log('Hiii');
      this.router.navigateByUrl('/dummy', { skipLocationChange: true });
      this.router.navigate(["/user/meetings"]);
    });
  }

  sprintplanmeet() {

  }

  sprintretromeet() {

  }

}
