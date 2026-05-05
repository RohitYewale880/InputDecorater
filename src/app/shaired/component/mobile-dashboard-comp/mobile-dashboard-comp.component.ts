import { Component, OnInit } from '@angular/core';
import { IMobile } from '../../modals/mobile';
import { MobileData } from '../../consts/mobile';

@Component({
  selector: 'app-mobile-dashboard-comp',
  templateUrl: './mobile-dashboard-comp.component.html',
  styleUrls: ['./mobile-dashboard-comp.component.scss']
})
export class MobileDashboardCompComponent implements OnInit {

  constructor() { }
  mobileArr : Array<IMobile> = []
  ngOnInit(): void {
    this.mobileArr = MobileData;
  }

  trackByfun(index : number, item : IMobile){
    return item.id;
  }
}
