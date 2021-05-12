import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginToPanelComponent } from './login-to-panel.component';

describe('LoginToPanelComponent', () => {
  let component: LoginToPanelComponent;
  let fixture: ComponentFixture<LoginToPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginToPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginToPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
