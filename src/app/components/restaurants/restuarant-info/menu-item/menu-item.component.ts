import {Component, Input, OnInit} from '@angular/core';
import {Menu} from '../../../../restaurant.model';
import {RestuarantsService} from '../../../../services/restuarants.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() dish: Menu;

  constructor(private service: RestuarantsService) {
  }

  ngOnInit(): void {
  }

  onAddDish(amount: string): void {
    this.service.addingDish(+amount, this.dish);
  }
}
