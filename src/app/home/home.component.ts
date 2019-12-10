import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie';
import { MovieService } from '../core/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[];
  moviesBackground: Movie[];
  moviesPoster: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getAllTop20RevenueMovies()
    .subscribe(
      m => {
        this.movies = m;
        console.log(this.movies);
      }
    );
    for (let index = 0; index < 5; index++) {
      this.moviesBackground.push(this.movies[index]);
    }

    for (let index = 5; index < 20; index++) {
      this.moviesPoster.push(this.movies[index]);
    }
  }
}
