import {Component, DoCheck, OnInit} from '@angular/core';
import {RestuarantsService} from '../../services/restuarants.service';
import {Restaurant} from '../../restaurant.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];
  login = false;

  constructor(private service: RestuarantsService) {
    this.restaurants = this.service.filteredRestaurants;
  }

  ngOnInit(): void {
  }

}
