import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { ItemMovieComponent } from './list-movie/item-movie/item-movie.component';
import { BookSeatMovieComponent } from './book-seat-movie/book-seat-movie.component';
import { ListSeatComponent } from './book-seat-movie/list-seat/list-seat.component';
import { ItemSeatComponent } from './book-seat-movie/list-seat/item-seat/item-seat.component';
import { MaterialModule } from '../material/material.module';
import { ClientRoutingModule } from './client-routing.module';
import { NavbarClientComponent } from './navbar-client/navbar-client.component';
import { DetailMovieComponent } from './list-movie/detail-movie/detail-movie.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../common/pipes/pipes.module';

@NgModule({
  declarations: [
    ClientComponent,
    ListMovieComponent,
    ItemMovieComponent,
    BookSeatMovieComponent,
    ListSeatComponent,
    ItemSeatComponent,
    NavbarClientComponent,
    DetailMovieComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
  ],
  exports: [ClientComponent],
})
export class ClientModule {}
