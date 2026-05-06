import { Component, Input, OnInit } from '@angular/core';
import { Imovies } from '../../modals/movie';

@Component({
  selector: 'app-movie-comp',
  templateUrl: './movie-comp.component.html',
  styleUrls: ['./movie-comp.component.scss']
})
export class MovieCompComponent implements OnInit {

  
  constructor() { }

  @Input() movieObj! : Imovies;

  ngOnInit(): void {
  }

}
