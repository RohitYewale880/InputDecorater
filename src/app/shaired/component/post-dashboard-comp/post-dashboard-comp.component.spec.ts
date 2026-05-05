import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDashboardCompComponent } from './post-dashboard-comp.component';

describe('PostDashboardCompComponent', () => {
  let component: PostDashboardCompComponent;
  let fixture: ComponentFixture<PostDashboardCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDashboardCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDashboardCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
