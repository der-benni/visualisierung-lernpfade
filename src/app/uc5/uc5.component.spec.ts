import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uc5Component } from './uc5.component';

describe('Uc5Component', () => {
  let component: Uc5Component;
  let fixture: ComponentFixture<Uc5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Uc5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uc5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
