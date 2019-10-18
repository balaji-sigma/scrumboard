import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface NewStMeet {
  title: string;
  date?: string;
  in1?: boolean;
  in2?: boolean;
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

  ngOnInit() {
    this.newstmeetdata = <NewStMeet>{ title: 'Daily Standup Meeting' };
    console.log(this.data);
  }

  ngAfterViewInit(): void { }

  /*
  emptyArticle(): NewStMeet {
    return {
      title: 'Hi',
    }
  }

  newstmeetdata = this.emptyArticle();
  */
  public data1 = <NewStMeet>{ title: 'Hi' };
  public data2: NewStMeet = { title: 'Hi' };


  onformsubmit() {
    //console.log(stmeetform.value | json)
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }



}
