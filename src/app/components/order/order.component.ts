import {Component, OnInit} from '@angular/core';
import {RestuarantsService} from '../../services/restuarants.service';
import {SelectedDish} from '../../restaurant.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  selectedDishes: SelectedDish[] = [];

  constructor(private service: RestuarantsService) {
  }

  ngOnInit(): void {
    this.selectedDishes = this.service.selectedDishes;
  }

  total(dish: SelectedDish): number {
    return dish.amount * dish.dish.price;
  }

}
