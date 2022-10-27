import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  getResult(name): Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/search/multi?api_key=6645c10f87e3886359b62dd6941433c7&language=en-US&query='+name+'&include_adult=true')
    .pipe(
      tap(data => data)
    )

  }
}
