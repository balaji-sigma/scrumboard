import { Component, OnInit, Inject } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { NewprojserviceService } from '../newprojservice.service';
import { Router } from '@angular/router';


export interface NewProject {
  title?: string;
  description?: string;
  created_date?: number;
  start_date?: number;
  end_date?: number;
  owner_id: number;
}

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {

  constructor(public npserv: NewprojserviceService, private router: Router) { }

  public newproj = <NewProject>{ owner_id: 1 }

  ngOnInit() {
    console.log('In init');
    this.newproj.created_date = 0;
    this.newproj.description = '';
    this.newproj.title = '';
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    let date = new Date(event.value);
    date.setHours(16, 12, 48)

    if (type == 'cd') this.newproj.created_date = date.getTime() / 1000;
    if (type == 'sd') this.newproj.start_date = date.getTime() / 1000;
    if (type == 'ed') this.newproj.end_date = date.getTime() / 1000;
  }

  onformsubmit() {
    //console.log('Hii');

    this.npserv.onnpformsubmit(this.newproj).subscribe(data => console.log('success', data),
      error => console.log('Response : ', error));
    //this.ngOnInit();
    //this.router.navigateByUrl('/SampleComponent', { skipLocationChange: true });
    this.router.navigate(["/user/projects"]);
  }
}
