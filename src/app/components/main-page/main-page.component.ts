import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RestuarantsService} from '../../restuarants.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  login = false;
  correctPassword = 'admin1234';
  error = false;

  constructor(private route: Router, private service: RestuarantsService, private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
  }

  changeLogin(): void {
    this.login = !this.login;
    this.error = false;
  }

  onLogin(password: string): void {
    if (password === this.correctPassword) {
      alert('good');
    } else {
      this.error = true;
    }
  }

  onSearch(city): void {
    this.service.onSearch(city);
    this.route.navigate(['restaurants']);
  }
}
