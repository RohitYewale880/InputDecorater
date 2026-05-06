import { Component, Input, OnInit } from '@angular/core';
import { Imovies } from '../../modals/movie';
import { movieArray } from '../../consts/movie';

@Component({
  selector: 'app-movie-dashboard-comp',
  templateUrl: './movie-dashboard-comp.component.html',
  styleUrls: ['./movie-dashboard-comp.component.scss']
})
export class MovieDashboardCompComponent implements OnInit {

  constructor() { }
  movieArr: Array<Imovies> = []
  ngOnInit(): void {
    this.movieArr = movieArray;
  }

  trackByfun(index: number, item: Imovies) {
    return item.id
  }

}
