import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDashboardCompComponent } from './mobile-dashboard-comp.component';

describe('MobileDashboardCompComponent', () => {
  let component: MobileDashboardCompComponent;
  let fixture: ComponentFixture<MobileDashboardCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileDashboardCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileDashboardCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
