import { Component, OnInit } from '@angular/core';
import { Globals } from '../../assets/data/globals';
import { MeetingsService } from '../meetings.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DaistandmeetdialogComponent } from '../daistandmeetdialog/daistandmeetdialog.component';


@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  public meetings = [];
  public newstmeet = "Daily Standup Meeting";


  constructor(public global: Globals, private meeting: MeetingsService, public dialog: MatDialog) { }

  ngOnInit() {

    this.meeting.getmeetings().subscribe(data => this.meetings = data);

  }

  daistanmeet() {
    let dialogRef = this.dialog.open(DaistandmeetdialogComponent, {
      height: '500px',
      width: '600px',
      data: { newstmeet: this.newstmeet }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.newstmeet = result;
      console.log(this.newstmeet);

    });
  }



}
