import {Component, OnInit} from '@angular/core';

import {Restaurant} from '../../restaurant.model';
import {RestaurantsService} from '../../services/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];
  login = false;

  constructor(public service: RestaurantsService) {
    this.restaurants = this.service.filteredRestaurants;
  }

  ngOnInit(): void {
  }

}
