import {Component, OnInit} from '@angular/core';
import {RestuarantsService} from '../../../services/restuarants.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-to-panel',
  templateUrl: './login-to-panel.component.html',
  styleUrls: ['./login-to-panel.component.scss']
})
export class LoginToPanelComponent implements OnInit {
  correctPassword = 'admin1234';

  constructor(public service: RestuarantsService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onLogin(password: string): void {
    if (password === this.correctPassword) {
      this.router.navigate(['panel']);
    } else {
      this.service.error = true;
    }
  }

  changeLogin(): void {
    this.service.openingLogin();
  }
}
