import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Meetings } from '../assets/data/meetings'
import { NewStMeet } from './daistandmeetdialog/daistandmeetdialog.component';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {

  //public _url = "./assets/data/json/meetings.json";
  public _url = 'http://test.sigmasolutions.co.in/board/getdsmeets';
  public _url1 = 'http://test.sigmasolutions.co.in/board/addnewdsumeet';
  public _url2 = 'http://test.sigmasolutions.co.in/board/updatedsmeet';

  constructor(private _http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred:', error.error.message);
    } else {
      if (error.status == 200) {
        return throwError(
          'Success. New Project created.');
      }
      console.log(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

  getmeetings() {
    return this._http.get<any>(this._url).pipe(
      catchError(this.handleError)
    );
  }

  adddsumeet(data: NewStMeet): Observable<NewStMeet> {
    return this._http.post<NewStMeet>(this._url1, data).pipe(
      catchError(this.handleError)
    );
  }

  updatedsmeet(id: number, desc: string, status: number): Observable<NewStMeet> {
    let arr = {
      id: id,
      desc: desc,
      status: status
    };
    return this._http.post<any>(this._url2, arr).pipe(
      catchError(this.handleError)
    );
  }
}
