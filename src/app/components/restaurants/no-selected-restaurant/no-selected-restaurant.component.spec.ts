import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSelectedRestaurantComponent } from './no-selected-restaurant.component';

describe('NoSelectedRestaurantComponent', () => {
  let component: NoSelectedRestaurantComponent;
  let fixture: ComponentFixture<NoSelectedRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoSelectedRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSelectedRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
