import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../../../../restaurant.model';

import {animate, state, style, transition, trigger} from '@angular/animations';
import {RestaurantsService} from '../../../../../services/restaurants.service';

@Component({
  selector: 'app-add-opinion',
  templateUrl: './add-opinion.component.html',
  styleUrls: ['./add-opinion.component.scss'],
  animations: [
    trigger('show', [
      state('in', style({
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          transform: 'translateY(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateY(-100px)'
        }))
      ]),
    ]),
  ]
})
export class AddOpinionComponent implements OnInit {
  @Input() restaurant: Restaurant;
  addOpinion = false;

  constructor(private service: RestaurantsService) { }

  ngOnInit(): void {
  }

  onAddOpinion(star: number, description: string): void {
    const opinion = {description, star};
    const name = this.restaurant.name;

    this.service.postingOpinion(opinion, name).subscribe(res => {
      console.log(res);
      this.restaurant.opinions.push(res);
    });
  }
}
