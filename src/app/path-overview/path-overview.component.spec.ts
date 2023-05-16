import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathOverviewComponent } from './path-overview.component';

describe('PathOverviewComponent', () => {
  let component: PathOverviewComponent;
  let fixture: ComponentFixture<PathOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
