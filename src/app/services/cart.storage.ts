import {Injectable} from '@angular/core';
import {Menu, SelectedDish} from '../restaurant.model';
import {Observable} from 'rxjs';

@Injectable()
export class CartStorage {
  selectedDishes: SelectedDish[] = [];

  addingADishToThrCart(amount: number, dish: Menu): void {
    const d = {dish, amount};
    const id = this.selectedDishes.findIndex(x => x.dish === dish);
    if (id !== -1) {
      this.selectedDishes[id].amount++;
    } else {
      this.selectedDishes.push(d);
    }
  }

  getDishes(): any {
    return new Observable(observer => {
        observer.next(this.selectedDishes);
    });
  }
}
