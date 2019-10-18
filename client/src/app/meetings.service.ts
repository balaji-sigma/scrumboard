import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meetings } from '../assets/data/meetings'

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {

  _url = "./assets/data/json/meetings.json";

  constructor(private http: HttpClient) { }

  getmeetings(): Observable<Meetings[]> {
    return this.http.get<Meetings[]>(this._url);
  }
}
