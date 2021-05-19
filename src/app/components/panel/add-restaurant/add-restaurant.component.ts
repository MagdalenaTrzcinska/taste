import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Restaurant} from '../../../restaurant.model';
import {RestaurantsService} from '../../../services/restaurants.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  constructor(private service: RestaurantsService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let name = this.form.value.name.split(' ');
    name = name.join('-').toLowerCase();

    const restaurant: Restaurant = {
      name,
      location: this.form.value.location,
      delivery: {
        amount: this.form.value.price,
        time: this.form.value.time
      },
      menu: null,
      opinions: null
    };

    this.service.postingRestaurant(restaurant).subscribe(res => {
      this.service.restaurants.push(res);
    });
  }
}
