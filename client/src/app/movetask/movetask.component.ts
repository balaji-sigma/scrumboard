import { Component, OnInit, Inject } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MovetaskserService } from '../movetaskser.service';

export interface moveTask {

  taskid?: number;
  movby?: number;
  srcid: number;
  dstid?: number;
  mdate?: number;
}

@Component({
  selector: 'app-movetask',
  templateUrl: './movetask.component.html',
  styleUrls: ['./movetask.component.css']
})
export class MovetaskComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MovetaskComponent>,
    public mtser: MovetaskserService) { }

  ngOnInit() {
  }

  public movetask = <moveTask>{ srcid: 1 }





  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    let date = new Date(event.value);
    date.setHours(16, 12, 48)

    if (type == 'move') this.movetask.mdate = date.getTime() / 1000;
  }

  onformsubmit() {

    console.log('insub');
    this.mtser.ontasksubmit(this.movetask).subscribe(
      data => console.log('success', data),
      error => console.log('oops', error)
    );
    console.log('insub1');

  }

}
