import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Restaurant} from '../../../restaurant.model';

import {ActivatedRoute, Params} from '@angular/router';
import {RestaurantsService} from '../../../services/restaurants.service';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.scss'],
})
export class RestaurantInfoComponent implements OnInit {
  restaurant: Restaurant;

  constructor(private http: HttpClient, private service: RestaurantsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.restaurant = this.service.restaurants.find(e => e.name === params.name);
    });
  }

  getMinimumCost(): number {
    const prizes = this.restaurant.menu.map(d => d.price);
    return Math.min(...prizes);
  }
}
