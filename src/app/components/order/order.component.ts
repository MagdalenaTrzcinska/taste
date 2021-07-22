import {Component, OnInit} from '@angular/core';
import {SelectedDish} from '../../restaurant.model';
import {CartStorage} from '../../services/cart.storage';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  selectedDishes: SelectedDish[];

  constructor(private cartStorage: CartStorage) {
  }

  ngOnInit(): void {
    const cart = this.cartStorage.getDishes();
    cart.subscribe((dishes: SelectedDish[]) => {
      this.selectedDishes = dishes;
    });
  }

  total(dish: SelectedDish): number {
    return dish.amount * dish.dish.price;
  }
}
