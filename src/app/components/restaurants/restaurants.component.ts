import {Component, OnInit} from '@angular/core';

import {Restaurant} from '../../restaurant.model';
import {RestaurantsService} from '../../services/restaurants.service';
import {OrderComponent} from '../order/order.component';
import {CartStorage} from '../../services/cart.storage';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];
  login = false;

  constructor(public service: RestaurantsService, public cart: CartStorage) {
    this.restaurants = this.service.filteredRestaurants;
  }

  ngOnInit(): void {
  }

}
