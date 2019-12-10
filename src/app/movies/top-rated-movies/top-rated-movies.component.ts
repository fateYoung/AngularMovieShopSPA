import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/core/services/movie.service';


@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent implements OnInit {

  movies: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getAllTop20RatingMovies()
    .subscribe(
      m => {
        this.movies = m;
        console.log(this.movies);
      }
    );
  }

}
