import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dashbl } from '../assets/data/dashbl';

@Injectable({
  providedIn: 'root'
})
export class DashblService {

  _url = "./assets/data/json/dashbl.json";

  constructor(private _http: HttpClient) { }

  getdashbl(): Observable<Dashbl[]> {
    return this._http.get<Dashbl[]>(this._url);
  }
}
