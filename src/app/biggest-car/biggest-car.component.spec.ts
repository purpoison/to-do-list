import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiggestCarComponent } from './biggest-car.component';

describe('BiggestCarComponent', () => {
  let component: BiggestCarComponent;
  let fixture: ComponentFixture<BiggestCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiggestCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiggestCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
