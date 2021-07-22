import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RestaurantsService} from '../../../services/restaurants.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-to-panel',
  templateUrl: './login-to-panel.component.html',
  styleUrls: ['./login-to-panel.component.scss']
})
export class LoginToPanelComponent implements OnInit {
  correctPassword = 'admin1234';

  @Output() isVisibleLoginForm = new EventEmitter<boolean>();
  @Input() error;
  loggedIn = false;

  constructor(public service: RestaurantsService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onLogin(password: string): void {
    if (password === this.correctPassword) {
      this.router.navigate(['panel']);
      this.service.isLoggedIn = true;
    } else {
      this.error = true;
    }
  }

  onCloseForm(): void {
    this.isVisibleLoginForm.emit(false);
  }
}
