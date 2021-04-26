import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProxyService } from './proxy.service';

@Injectable({
  providedIn: 'root', // provider là dùng cho service
})
export class MovieServiceService {
  listMovie = [
    {
      id: '1',
      name: 'Than chet',
      price: '200000',
      detail: 'test detail',
      imgUrl: '',
      totalLike: 0,
    },
    {
      id: '2',
      name: 'Than chet 1',
      price: '200000',
      detail: 'test detail',
      imgUrl: '',
      totalLike: 0,
    },
    {
      id: '3',
      name: 'Than chet 2',
      price: '200000',
      detail: 'test detail',
      imgUrl: '',
      totalLike: 0,
    },
    {
      id: '4',
      name: 'Than chet 3',
      price: '200000',
      detail: 'test detail',
      imgUrl: '',
      totalLike: 0,
    },
  ];

  apiUrl = environment.apiUrl;

  // store cho phim modal
  private data = new BehaviorSubject({});
  public phimModal = this.data.asObservable();

  constructor(private proxyService: ProxyService) {}

  getDataMovie(): Observable<any> {
    const apiDataMovie = `${this.apiUrl}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`;
    return this.proxyService.get(apiDataMovie);
  }

  getDetailMovie(idMovie: string): Observable<any> {
    const apiDetailMovie = `${this.apiUrl}/QuanLyPhim/LayThongTinPhim?MaPhim=${idMovie}`;
    return this.proxyService.get(apiDetailMovie);
  }

  changeDataMovieModal(movie: any): void {
    this.data.next(movie);
  }


}
