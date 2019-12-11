import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { Movie } from '../shared/models/movie';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  movieFavorited(movie: Movie) {
    // Call api to save movie favorited
    console.log(movie);
  }

  moviePurchase(movie: Movie) {
    // Call api to save movie purchase
    console.log(movie);
  }
}
