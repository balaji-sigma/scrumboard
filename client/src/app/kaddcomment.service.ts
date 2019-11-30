import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AddComment } from './addcomment/addcomment.component'

@Injectable({
  providedIn: 'root'
})
export class KaddcommentService {


  constructor(private _hhtp: HttpClient) { }
  public _url = 'http://test.sigmasolutions.co.in/server/newcomment';

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred:', error.error.message);
    } else {
      console.log(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

  ontasksubmit(task: AddComment): Observable<AddComment> {
    return this._hhtp.post<AddComment>(this._url, task).pipe(
      catchError(this.handleError)
    );
  }

}
