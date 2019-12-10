import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiService: ApiService) { }

  getAllMovies(): Observable<Movie[]> {
    return this.apiService.getAll('/movies');
  }

  getAllTop20RatingMovies(): Observable<Movie[]> {
    return this.apiService.getAll('/movies/top20rating');
  }
}
