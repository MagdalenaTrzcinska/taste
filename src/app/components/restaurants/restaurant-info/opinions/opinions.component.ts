import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../../../restaurant.model';

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.scss'],

})
export class OpinionsComponent implements OnInit {
  @Input() restaurant: Restaurant;

  constructor() {
  }

  ngOnInit(): void {
  }

  calcStar(): string {
    const stars = this.restaurant.opinions.map(s => s.star);
    const result = stars.reduce((a, b) => a + b);
    return (result / stars.length).toFixed(2);
  }

  lengthOfOpinion(): number {
    return this.restaurant.opinions.length;
  }
}
