import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http: HttpClient) { }

  getAll(path: string): Observable<any[]> {
    return this.http.get(`${environment.apiUrl}${path}`)
      .pipe
      (
        map(response => response as any[]), catchError(e => throwError(new Error('SOMETHING BAD HAPPENED')))
      );
  }

  getOne(path: string, id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}` + '/' + id)
      .pipe
      (
        map(response => response), catchError(e => throwError(new Error('SOMETHING BAD HAPPENED')))
      );
  }
  create(path: string, resource: Object = {}, options?): Observable<any> {
    return this.http.post(`${environment.apiUrl}${path}`, JSON.stringify(resource), options)
      .pipe(map(response => response), catchError(e => throwError(new Error('SOMETHING BAD HAPPENED'))));
  }
  update(path: string, resource) {
    return this.http.put(`${environment.apiUrl}${path}` + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(map(response => response), catchError(e => throwError(new Error('SOMETHING BAD HAPPENED'))));
  }
}
