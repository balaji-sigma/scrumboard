import { Component, OnInit, Inject } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface NewTask {
  title: string;
  desc?: string;
  torad?: number;
  colrad?: string;
  cdate?: number;
  sdate?: number;
  edate?: number;
}

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TaskNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  public newtask = <NewTask>{ title: '' }


  ngOnInit() {
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    let date = new Date(event.value);
    date.setHours(16, 12, 48)

    if (type == 'cd') this.newtask.cdate = date.getTime();
    if (type == 'sd') this.newtask.sdate = date.getTime();
    if (type == 'ed') this.newtask.edate = date.getTime();

  }

  onformsubmit() {

  }


}
