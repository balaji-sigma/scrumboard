import { Component, OnInit, Inject } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { KaddcommentService } from '../kaddcomment.service';


export interface AddComment {
  taskid?: number;
  user?: number;
  commdate?: number;
  comment: string;
}

@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})



export class AddcommentComponent implements OnInit {

  public newcomment = <AddComment>{ comment: '' };

  constructor(public dialogRef: MatDialogRef<AddcommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public kaddc: KaddcommentService) { }

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

    this.newcomment.commdate = date.getTime() / 1000;
  }

  onformsubmit() {

    console.log('insub');
    this.kaddc.ontasksubmit(this.newcomment).subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
    );
    console.log('insub1');

  }
}
