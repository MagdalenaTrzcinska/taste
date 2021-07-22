import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from '../../../services/restaurants.service';

@Component({
  selector: 'app-no-selected-restaurant',
  templateUrl: './no-selected-restaurant.component.html',
  styleUrls: ['./no-selected-restaurant.component.scss']
})
export class NoSelectedRestaurantComponent implements OnInit {


  constructor(public service: RestaurantsService) {
  }

  ngOnInit(): void {
  }

}
