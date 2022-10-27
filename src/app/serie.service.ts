import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http:HttpClient) { }
  getSeries():Observable<any[]>{
    return this.http.get<any[]>('https://api.themoviedb.org/3/discover/tv?api_key=6645c10f87e3886359b62dd6941433c7&language=en-US&sort_by=popularity.desc&page=1')
    .pipe(
      tap(data => data)
    )
  }
  getSerieByName(name): Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/tv/'+name+'?api_key=6645c10f87e3886359b62dd6941433c7&language=en-US')
    .pipe(
      tap(data => data)
    )
  }
}
