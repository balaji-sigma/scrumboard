import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { NavItem } from '../assets/data/sidemenu'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmploginService {

  private _url: string = "./assets/data/sidemenu.json";

  constructor(private http: HttpClient) { }

  getsidemenu(): Observable<NavItem[]> {
    return this.http.get<NavItem[]>(this._url);
  }
}
