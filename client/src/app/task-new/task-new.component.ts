import { Component, OnInit, Inject } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { KnewtaskService } from '../knewtask.service';


export interface NewTask {
  title: string;
  desc?: string;
  torad?: number;
  colrad?: number;
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
    @Inject(MAT_DIALOG_DATA) public data: any, public ktser: KnewtaskService) { }

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

    if (type == 'cd') this.newtask.cdate = date.getTime() / 1000;
    if (type == 'sd') this.newtask.sdate = date.getTime() / 1000;
    if (type == 'ed') this.newtask.edate = date.getTime() / 1000;



  }

  onformsubmit() {
    console.log('insub');
    this.ktser.ontasksubmit(this.newtask).subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
    );
    console.log('insub1');
  }


}
