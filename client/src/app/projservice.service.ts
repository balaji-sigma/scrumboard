import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProjserviceService {

  constructor(private _http: HttpClient) { }
  public _url = 'http://test.sigmasolutions.co.in/board/getprojects';

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

  getprojects() {
    return this._http.get(this._url).pipe(
      catchError(this.handleError)
    );
  }
}
