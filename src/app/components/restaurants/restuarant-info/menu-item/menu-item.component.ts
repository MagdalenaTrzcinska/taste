import {Component, Input, OnInit} from '@angular/core';
import {Menu} from '../../../../restaurant.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() item: Menu;

  constructor() {
  }

  ngOnInit(): void {
  }

}
