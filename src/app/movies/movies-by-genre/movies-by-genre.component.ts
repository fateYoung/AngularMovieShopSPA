import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-movies-by-genre',
  template: '<app-movie-list [inputMovie] = "movies"></app-movie-list>',
  styleUrls: ['./movies-by-genre.component.css']
})
export class MoviesByGenreComponent implements OnInit {

  movies: Movie[];
  urlSegment: string;
  constructor(private route: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.urlSegment = params.get('id');
        this.movieService.getMoviesByGenreId(+this.urlSegment)
        .subscribe(
          m => {
            this.movies = m;
            console.log(this.movies);
          }
        );
      }
    );
  }
}
