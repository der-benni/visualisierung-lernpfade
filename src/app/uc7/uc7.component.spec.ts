import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uc7Component } from './uc7.component';

describe('Uc7Component', () => {
  let component: Uc7Component;
  let fixture: ComponentFixture<Uc7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Uc7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uc7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
