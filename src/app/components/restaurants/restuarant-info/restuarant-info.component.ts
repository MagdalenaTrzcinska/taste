import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Restaurant} from '../../../restaurant.model';
import {RestuarantsService} from '../../../services/restuarants.service';
import {ActivatedRoute, Params} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-restuarant-info',
  templateUrl: './restuarant-info.component.html',
  styleUrls: ['./restuarant-info.component.scss'],
  animations: [
    trigger('show', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          opacity: 0,
          transform: 'translateY(-100px)'
        }))
      ]),
    ]),
  ]
})
export class RestuarantInfoComponent implements OnInit {
  restaurant: Restaurant;
  addOpinion = false;

  constructor(private http: HttpClient, private service: RestuarantsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.restaurant = this.service.restaurants.find(e => e.name === params.name);
    });
  }

  getMinimumCost(): number {
    const prizes = this.restaurant.menu.map(d => d.price);
    return Math.min(...prizes);
  }

  calcStar(): number {
    const stars = this.restaurant.opinions.map(s => s.star);
    const result = stars.reduce((a, b) => a + b);
    return result / stars.length;
  }

  lengthOfOpinion(): number {
    const stars = this.restaurant.opinions.map(s => s.star);
    return stars.length;
  }

  onAddOpinion(star: number, description: string): void {
    const opinion = {description, star};
    const name = this.restaurant.name;
    const lengthOfOpinion = this.restaurant.opinions.length;
    this.service.addingOpinion(opinion, name, lengthOfOpinion).subscribe(res => {
      console.log(res);
      this.restaurant.opinions.push(res);
    });
  }
}
