import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/client/client-services/movie-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit { 

  movieData : any; 


  constructor(private movieService : MovieServiceService) { }

  ngOnInit(): void {
    this.movieService.phimModal.subscribe( data => {
      this.movieData = data;
    })
  }

}
