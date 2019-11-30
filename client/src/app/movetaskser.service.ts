import { Injectable } from '@angular/core';
import { moveTask } from './movetask/movetask.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovetaskserService {

  constructor(public _http: HttpClient) { }

  public _url = 'http://test.sigmasolutions.co.in/server/movetask';

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

  ontasksubmit(task: moveTask): Observable<moveTask> {
    return this._http.post<moveTask>(this._url, task).pipe(
      catchError(this.handleError)
    );
  }
}
