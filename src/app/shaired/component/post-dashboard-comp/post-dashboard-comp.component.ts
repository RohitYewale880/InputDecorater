import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../modals/post';
import { posts } from '../../consts/post';

@Component({
  selector: 'app-post-dashboard-comp',
  templateUrl: './post-dashboard-comp.component.html',
  styleUrls: ['./post-dashboard-comp.component.scss']
})
export class PostDashboardCompComponent implements OnInit {

  constructor() { }
  postArr : Array<Ipost> = [];
  ngOnInit(): void {
    this.postArr = posts
  }

  trackByfun(index : number, item : Ipost){
    return item.id
  }
  
  

}
