import {Component, Input, OnInit} from '@angular/core';
import {Menu} from '../../../../restaurant.model';
import {Router} from '@angular/router';
import {CartStorage} from '../../../../services/cart.storage';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() dish: Menu;

  constructor(private cartStorage: CartStorage, public router: Router) {
  }

  ngOnInit(): void {
  }

  onAddDish(amount: string): void {
    this.cartStorage.addingADishToThrCart(+amount, this.dish);
  }
}
