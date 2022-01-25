import { environment } from './../../environments/environment';
import { Post } from './../interfaces/post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = environment.url;

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.url}/posts`).pipe(
      catchError((errot: any): Observable<any> => {
        return of({});
      })
    );
  }
}
