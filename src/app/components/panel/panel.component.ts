import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../../services/restaurants.service';
import {Restaurant} from '../../restaurant.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  restaurants: Restaurant[];

  constructor(public service: RestaurantsService, public router: Router) { }

  ngOnInit(): void {
    this.restaurants = this.service.restaurants;
  }

  onAddRestaurant() {

  }
}
