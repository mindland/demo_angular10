import { Component, OnInit, ViewChild } from '@angular/core';
import { ListMovieComponent } from './list-movie/list-movie.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  @ViewChild(ListMovieComponent) tagListMovie: ListMovieComponent | undefined;

  constructor() {}

  ngOnInit(): void {}

  addMovie(
    idMovie: string,
    nameMovie: string,
    priceMovie: string,
    imgMovie: string
  ): void {
    const objNewMovie = {
      id: idMovie,
      name: nameMovie,
      price: priceMovie,
      detail: '',
      imgUrl: imgMovie,
      totalLike: 0,
    };

    this.tagListMovie.addMovie(objNewMovie);
  }
}
