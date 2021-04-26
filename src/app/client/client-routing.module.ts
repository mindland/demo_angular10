import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeactivatedGuard } from '../core/guard/deactivated.guard';
import { BookSeatMovieComponent } from './book-seat-movie/book-seat-movie.component';
import { ClientComponent } from './client.component';
import { DetailMovieComponent } from './list-movie/detail-movie/detail-movie.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: 'book-seat',
        component: BookSeatMovieComponent,
      },
      {
        path: 'list-movie',
        component: ListMovieComponent,
      },
      {
        path: 'detail-movie/:id',
        component: DetailMovieComponent,
      },
      {
        path: 'detail-movie',
        component: DetailMovieComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
        canDeactivate: [DeactivatedGuard],
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
