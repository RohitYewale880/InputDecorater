import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from '../../modals/post';

@Component({
  selector: 'app-post-comp',
  templateUrl: './post-comp.component.html',
  styleUrls: ['./post-comp.component.scss']
})
export class PostCompComponent implements OnInit {

  constructor() { }
  @Input() post!: any;
  ngOnInit(): void {
    
  }

}
