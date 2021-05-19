import {Component, Input, OnInit} from '@angular/core';
import {Menu} from '../../../../restaurant.model';
import {RestaurantsService} from '../../../../services/restaurants.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() dish: Menu;

  constructor(private service: RestaurantsService) {
  }

  ngOnInit(): void {
  }

  onAddDish(amount: string): void {
    this.service.addingDish(+amount, this.dish);
  }
}
