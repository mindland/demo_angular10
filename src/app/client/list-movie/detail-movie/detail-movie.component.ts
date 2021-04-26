import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../../client-services/movie-service.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
})
export class DetailMovieComponent implements OnInit {
  constructor(
    private activatedRouted: ActivatedRoute,
    private movieService: MovieServiceService
  ) {}


  nameMovie = '';
  idMovie = '';

  detailMovie = {
    hinhAnh: '',
    tenPhim: '',
    moTa: '',
    ngayKhoiChieu: '',
  };

  ngOnInit(): void {
    const id = this.getIdMovie();
    if (id) {
      this.movieService.getDetailMovie(id).subscribe((res) => {
        this.detailMovie = res;
      });
    } else {
      this.getParamsFromUi();
      this.movieService.getDetailMovie(this.idMovie).subscribe((res) => {
        this.detailMovie = res;
      });
    }
  }

  getIdMovie(): string {
    const idMovie = this.activatedRouted.snapshot.paramMap.get('id') as string;
    return idMovie;
  }

  getParamsFromUi(): void {
    this.activatedRouted.queryParams.subscribe((params) => {
      this.idMovie = params.maPhim;
      this.nameMovie = params.tenPhim;
    });
  }
}
