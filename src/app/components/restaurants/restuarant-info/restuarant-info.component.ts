import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Restaurant} from '../../../restaurant.model';
import {RestuarantsService} from '../../../restuarants.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-restuarant-info',
  templateUrl: './restuarant-info.component.html',
  styleUrls: ['./restuarant-info.component.scss']
})
export class RestuarantInfoComponent implements OnInit {
  restaurant: Restaurant;
  minCost: number;

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
}
