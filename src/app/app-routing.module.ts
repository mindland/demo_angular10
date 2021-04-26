import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { ClientComponent } from './client/client.component';
import { ClientModule } from './client/client.module';
import { ListMovieComponent } from './client/list-movie/list-movie.component';
import { AuthGuard } from './core/guard/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'list-movie',
    component: ListMovieComponent,
  },
  {
    path: '',
    component: ClientComponent,
  },
  {
    path: 'client',
    loadChildren: () => ClientModule,
  },
  {
    path: 'admin',
    loadChildren: () => AdminModule,
    canActivate: [AuthGuard],
  },

  /// nam coi cung
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
