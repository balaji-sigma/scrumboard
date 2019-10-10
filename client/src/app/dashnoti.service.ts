import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashNoti } from '../assets/data/dashnoti';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashnotiService {

  _url = "./assets/data/json/dashnoti.json";

  constructor(private http: HttpClient) { }

  getNotification(): Observable<DashNoti[]> {

    return this.http.get<DashNoti[]>(this._url);

  }
}
