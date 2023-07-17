import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uc0Component } from './uc0.component';

describe('Uc0Component', () => {
  let component: Uc0Component;
  let fixture: ComponentFixture<Uc0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Uc0Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uc0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
