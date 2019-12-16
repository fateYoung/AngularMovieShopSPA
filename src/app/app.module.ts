// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Package Imports
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { LoginComponent } from './login/login.component';
import { MoviesByGenreComponent } from './movies/movies-by-genre/movies-by-genre.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { AuthenticationGuard } from 'src/app/core/guards/authenticationGuard';
import { JwtModule } from '@auth0/angular-jwt';

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
    AboutUsComponent,
    LoginComponent,
    MoviesByGenreComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
