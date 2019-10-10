import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Dashus } from '../assets/data/dashus';

@Injectable({
  providedIn: 'root'
})
export class DashusService {

  _url = "./assets/data/json/dashus.json";

  constructor(private _http: HttpClient) { }

  getdashus(): Observable<Dashus[]> {
    return this._http.get<Dashus[]>(this._url);
  }

}
