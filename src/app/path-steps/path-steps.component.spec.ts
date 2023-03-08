import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathStepsComponent } from './path-steps.component';

describe('PathStepsComponent', () => {
  let component: PathStepsComponent;
  let fixture: ComponentFixture<PathStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
