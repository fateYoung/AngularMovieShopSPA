import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/core/services/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies-by-genre',
  template: '<app-movie-list [inputMovie] = "movies"></app-movie-list>',
  styleUrls: ['./movies-by-genre.component.css']
})
export class MoviesByGenreComponent implements OnInit {

  movies: Movie[];
  myvariable: Subscription;
  constructor(private route: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit() {
    this.myvariable = this.movieService.getMoviesByGenreId(this.route.snapshot.params.id)
    .subscribe(
      m => {
        this.movies = m;
        console.log(this.movies);
      }
    );
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.myvariable.unsubscribe();
  }

}
