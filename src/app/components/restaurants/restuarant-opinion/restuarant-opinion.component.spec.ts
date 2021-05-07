import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestuarantOpinionComponent } from './restuarant-opinion.component';

describe('RestuarantOpinionComponent', () => {
  let component: RestuarantOpinionComponent;
  let fixture: ComponentFixture<RestuarantOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestuarantOpinionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestuarantOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
