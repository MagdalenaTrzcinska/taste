import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from '../../../services/restaurants.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-to-panel',
  templateUrl: './login-to-panel.component.html',
  styleUrls: ['./login-to-panel.component.scss']
})
export class LoginToPanelComponent implements OnInit {
  correctPassword = 'admin1234';

  constructor(public service: RestaurantsService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onLogin(password: string): void {
    if (password === this.correctPassword) {
      this.router.navigate(['panel']);
      this.service.loggedIn = true;
    } else {
      this.service.error = true;
    }
  }

  changeLogin(): void {
    this.service.openingTheLoginForm();
  }
}
