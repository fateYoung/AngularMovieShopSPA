import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-top-revenue-movies',
  template: '<app-movie-list [inputMovie] = "movies"></app-movie-list>',
  styleUrls: ['./top-revenue-movies.component.css']
})
export class TopRevenueMoviesComponent implements OnInit {

  movies: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getAllTop20RevenueMovies()
    .subscribe(
      m => {
        this.movies = m;
        console.log(this.movies);
      }
    );
  }

}
