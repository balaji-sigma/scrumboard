import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NewProject } from './newproject/newproject.component';

@Injectable({
  providedIn: 'root'
})
export class NewprojserviceService {

  constructor(private _http: HttpClient) { }
  public _url = 'http://test.sigmasolutions.co.in/board/addnewproj';

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

  onnpformsubmit(task: NewProject): Observable<NewProject> {
    return this._http.post<NewProject>(this._url, task).pipe(
      catchError(this.handleError)
    );
  }
}
