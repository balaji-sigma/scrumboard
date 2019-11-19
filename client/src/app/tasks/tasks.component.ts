import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TaskNewComponent } from '../task-new/task-new.component';
import { MovetaskComponent } from '../movetask/movetask.component';
import { AddcommentComponent } from '../addcomment/addcomment.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public newtask;

  opentask() {
    let dialogRef = this.dialog.open(TaskNewComponent, {
      height: '600px',
      width: '700px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.newtask = result;
      console.log(this.newtask);

    });
  }

  movetask() {
    let dialogRef1 = this.dialog.open(MovetaskComponent, {
      height: '600px',
      width: '700px'
    });

    dialogRef1.afterClosed().subscribe(result => {
      this.newtask = result;
      console.log(this.newtask);

    });
  }

  addcomment() {
    let dialogRef1 = this.dialog.open(AddcommentComponent, {
      height: '600px',
      width: '700px'
    });

    dialogRef1.afterClosed().subscribe(result => {
      this.newtask = result;
      console.log(this.newtask);

    });
  }

}
