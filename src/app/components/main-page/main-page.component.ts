import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {RestaurantsService} from '../../services/restaurants.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  showALoginForm = false;
  error = false;

  constructor(private route: Router, public service: RestaurantsService) {
  }

  ngOnInit(): void {
  }

  onOpenTheLoginForm(): void {
    this.showALoginForm = !this.showALoginForm;
    this.error = false;
  }

  onCloseTheLoginForm(): void {
    this.showALoginForm = false;
  }

  onRestaurantSearch(city): void {
    this.service.searchingRestaurants(city);
    this.route.navigate(['restaurants']);
  }
}
