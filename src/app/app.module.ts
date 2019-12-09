// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Package Imports
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Self Component Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenresComponent } from './genres/genres.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './shared/components/movie-list/movie-list.component';
import { CreateUserComponent } from './account/create-user/create-user.component';
import { MyAccountComponent } from './account/my-account/my-account.component';
import { CreateMovieComponent } from './admin/create-movie/create-movie.component';
import { CreateCastComponent } from './admin/create-cast/create-cast.component';
import { CreateCrewComponent } from './admin/create-crew/create-crew.component';
import { MyMovieComponent } from './account/my-movie/my-movie.component';
import { MyFavoritesComponent } from './account/my-favorites/my-favorites.component';
import { TopRatedMoviesComponent } from './movies/top-rated-movies/top-rated-movies.component';
import { TopRevenueMoviesComponent } from './movies/top-revenue-movies/top-revenue-movies.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    HomeComponent,
    MovieListComponent,
    CreateUserComponent,
    MyAccountComponent,
    CreateMovieComponent,
    CreateCastComponent,
    CreateCrewComponent,
    MyMovieComponent,
    MyFavoritesComponent,
    TopRatedMoviesComponent,
    TopRevenueMoviesComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
