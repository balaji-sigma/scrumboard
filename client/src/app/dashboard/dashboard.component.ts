import { Component, OnInit } from '@angular/core';
import { DashusService } from '../dashus.service';
import { DashblService } from '../dashbl.service';
import { DashmsService } from '../dashms.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent implements OnInit {

  public stories = [];
  public backlogs = [];
  public milestones = [];

  constructor(private _dashus: DashusService,
    private _dashbl: DashblService,
    private _dashms: DashmsService) { }

  ngOnInit() {

    this._dashus.getdashus().subscribe(data => this.stories = data);
    this._dashbl.getdashbl().subscribe(data => this.backlogs = data);
    this._dashms.getdashms().subscribe(data => this.milestones = data);

  }

}
