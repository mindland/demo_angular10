import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MovieServiceService } from '@clientService/movie-service.service';


@Component({
  selector: 'app-item-movie',
  templateUrl: './item-movie.component.html',
  styleUrls: ['./item-movie.component.scss'],
})
export class ItemMovieComponent implements OnInit {
  @Input() movie: any;
  @Output() likeEvent = new EventEmitter();

  constructor(
    private router: Router,
    private movieService: MovieServiceService
  ) {}

  ngOnInit(): void {}

  likeMovie() {
    this.movie.totalLike++;
    // this.likeEvent.emit(this.movie);   // thông báo thằng con có sự kiện click vào,  cha sẽ nhận được
  }

  navigateDetailMovie(): void {
    this.router.navigate(['client/detail-movie', this.movie.maPhim]);
  }

  seeModalComponent(): void {
    this.movieService.changeDataMovieModal(this.movie);
  }
}


