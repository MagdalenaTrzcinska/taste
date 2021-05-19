import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelRestaurantComponent } from './panel-restaurant.component';

describe('PanelRestaurantComponent', () => {
  let component: PanelRestaurantComponent;
  let fixture: ComponentFixture<PanelRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
