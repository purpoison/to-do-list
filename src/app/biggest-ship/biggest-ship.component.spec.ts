import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiggestShipComponent } from './biggest-ship.component';

describe('BiggestShipComponent', () => {
  let component: BiggestShipComponent;
  let fixture: ComponentFixture<BiggestShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiggestShipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiggestShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
