import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dashms } from '../assets/data/dashms';

@Injectable({
  providedIn: 'root'
})
export class DashmsService {

  _url = "./assets/data/json/dashms.json";

  constructor(private _http: HttpClient) { }

  getdashms(): Observable<Dashms[]> {
    return this._http.get<Dashms[]>(this._url);
  }
}
