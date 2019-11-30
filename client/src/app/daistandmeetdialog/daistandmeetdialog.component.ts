import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDatepickerInputEvent } from '@angular/material';

export interface NewStMeet {
  title: string;
  meetdate?: number;
  in1?: boolean;
  in2?: boolean;
  in3?: boolean;
  in4?: boolean;
  created_by?: number;
  desc?: string;
  status?: number;
  agenda?: string;
}

@Component({
  selector: 'app-daistandmeetdialog',
  templateUrl: './daistandmeetdialog.component.html',
  styleUrls: ['./daistandmeetdialog.component.css']
})
export class DaistandmeetdialogComponent implements OnInit, AfterViewInit {

  constructor(public dialogRef: MatDialogRef<DaistandmeetdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  public newstmeetdata: NewStMeet;
  public appuserinfo;
  public appuser;

  ngOnInit() {
    this.appuser = JSON.parse(localStorage.getItem(this.appuserinfo));
    this.newstmeetdata = <NewStMeet>{
      title: 'Daily Standup Meeting', in1: false, in2: false, in3: false, in4: false, desc: '', status: 1, agenda: ''
    };
    this.newstmeetdata.created_by = this.appuser.appuserid;
    //console.log(this.data);
    //console.log(this.newstmeetdata);
  }

  ngAfterViewInit(): void { }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    let date = new Date(event.value);
    date.setHours(16, 12, 48)

    if (type == 'md') this.newstmeetdata.meetdate = date.getTime() / 1000;

  }


  onformsubmit() {
    //console.log(stmeetform.value | json)
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }



}
