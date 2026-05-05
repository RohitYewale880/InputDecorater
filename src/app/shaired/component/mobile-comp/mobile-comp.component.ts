import { Component, Input, OnInit } from '@angular/core';
import { IMobile } from '../../modals/mobile';

@Component({
  selector: 'app-mobile-comp',
  templateUrl: './mobile-comp.component.html',
  styleUrls: ['./mobile-comp.component.scss']
})
export class MobileCompComponent implements OnInit {

  constructor() { }
  @Input() mobobj! : IMobile
  ngOnInit(): void {
  }

}
