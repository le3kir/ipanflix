import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private http:HttpClient) { }
  getTrending():Observable<any[]>{
    return this.http.get<any[]>('https://api.themoviedb.org/3/trending/all/week?api_key=6645c10f87e3886359b62dd6941433c7')
    .pipe(
      tap(data => data)
    )
  }
  getNowPlaying():Observable<any[]>{
    return this.http.get<any[]>('https://api.themoviedb.org/3/movie/now_playing?api_key=6645c10f87e3886359b62dd6941433c7&language=en-US&page=1')
    .pipe(
      tap(test => test)
    )
  }
}
