import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MovieServiceService } from '../client-services/movie-service.service';
import { ItemMovieComponent } from './item-movie/item-movie.component';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
})
export class ListMovieComponent implements OnInit {
  @ViewChildren(ItemMovieComponent)
  tagListItemMovie!: QueryList<ItemMovieComponent>;
  listMovie = [];

  constructor(private movieService: MovieServiceService) {}

  ngOnInit(): void {
    // code chạy thì component chạy code trong ngOnInut dau tien
    this.movieService.getDataMovie().subscribe( res => {   // subscribe se chay neu co tin khieu tra ve
      console.log(res);
      this.listMovie = res;
    })
    
  }

  countLikeMovie(movie: any): void {
    this.listMovie.forEach((mv) => {
      if (mv.id === movie.id) {
        mv.totalLike++;
      }
    });
  }

  addMovie(objMovie) {
    this.listMovie.push(objMovie);
  }

  changePriceAllMovie() {
    this.tagListItemMovie.map((item) => {
      item.movie.price = '50000';
    });
  }
}
