import { Component, OnInit } from '@angular/core';
import { ProjserviceService } from '../projservice.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  constructor(public projser: ProjserviceService) { }

  public projects;
  public step = 0;


  ngOnInit() {
    this.getprojs();
  }

  getprojs() {
    this.projser.getprojects().subscribe(data => { this.projects = data; console.log(this.projects) },
      err => console.error(err),
      () => console.log('done loading foods'));
  }

  getowner(id: number): string {
    if (id == 1) return 'Admin';
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


}


