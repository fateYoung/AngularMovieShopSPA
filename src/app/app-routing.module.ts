import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenresComponent } from './genres/genres.component';
import { TopRatedMoviesComponent } from './movies/top-rated-movies/top-rated-movies.component';
import { TopRevenueMoviesComponent } from './movies/top-revenue-movies/top-revenue-movies.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { CreateUserComponent } from './account/create-user/create-user.component';
import { MyFavoritesComponent } from './account/my-favorites/my-favorites.component';
import { MyMovieComponent } from './account/my-movie/my-movie.component';
import { MyAccountComponent } from './account/my-account/my-account.component';
import { CreateMovieComponent } from './admin/create-movie/create-movie.component';
import { CreateCastComponent } from './admin/create-cast/create-cast.component';
import { CreateCrewComponent } from './admin/create-crew/create-crew.component';
import { MoviesByGenreComponent } from './movies/movies-by-genre/movies-by-genre.component';
import { AuthenticationGuard } from './core/guards/authenticationGuard';
import { AdminGuard } from './core/guards/adminGuard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'topmovies', component: TopRatedMoviesComponent },
  { path: 'toprevenue', component: TopRevenueMoviesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'user/create', component: CreateUserComponent },
  { path: 'user/favorite', component: MyFavoritesComponent, canActivate: [AuthenticationGuard] },
  { path: 'user/purchase', component: MyMovieComponent, canActivate: [AuthenticationGuard] },
  { path: 'user/account', component: MyAccountComponent, canActivate: [AuthenticationGuard] },
  { path: 'admin/createmovie', component: CreateMovieComponent, canActivate: [AuthenticationGuard, AdminGuard] },
  { path: 'admin/createcast', component: CreateCastComponent, canActivate: [AuthenticationGuard, AdminGuard] },
  { path: 'admin/createcrew', component: CreateCrewComponent, canActivate: [AuthenticationGuard, AdminGuard] },
  { path: 'genres/:id', component: MoviesByGenreComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
