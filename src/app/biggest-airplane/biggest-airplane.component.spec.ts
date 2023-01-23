import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiggestAirplaneComponent } from './biggest-airplane.component';

describe('BiggestAirplaneComponent', () => {
  let component: BiggestAirplaneComponent;
  let fixture: ComponentFixture<BiggestAirplaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiggestAirplaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiggestAirplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
