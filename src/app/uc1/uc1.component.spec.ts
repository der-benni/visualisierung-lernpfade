import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uc1Component } from './uc1.component';

describe('Uc1Component', () => {
  let component: Uc1Component;
  let fixture: ComponentFixture<Uc1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Uc1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
