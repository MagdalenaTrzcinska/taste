import {Component, OnInit} from '@angular/core';
import {Menu, Opinion, Restaurant} from '../../../restaurant.model';
import {HttpClient} from '@angular/common/http';
import {RestaurantsService} from '../../../services/restaurants.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-panel-restaurant',
  templateUrl: './panel-restaurant.component.html',
  styleUrls: ['./panel-restaurant.component.scss'],
  animations: [
    trigger('show', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate(1000)
      ]),
      transition(':leave', [
        animate(500, style({
          opacity: 0,
        }))
      ]),
    ]),
  ]
})
export class PanelRestaurantComponent implements OnInit {
  form: FormGroup;
  restaurant: Restaurant;
  showMenu = false;
  showOpinion = false;
  showForm = false;
  edit = false;

  constructor(private http: HttpClient, private service: RestaurantsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.restaurant = this.service.restaurants.find(e => e.name === params.name);
    });

    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      imagePath: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
    let name = this.form.value.name.split(' ');
    name = name.join('-').toLowerCase();

    const menu: Menu = {
      name,
      description: this.form.value.description,
      imagePath: this.form.value.imagePath,
      price: this.form.value.price
    };
    this.service.postingDish(menu, this.restaurant.name).subscribe(res => {
      this.restaurant.menu.push(res);
    });
    this.form.reset();
  }

  onRemoveOpinion(opinion: Opinion): void {
    if (confirm('Are you sure?')) {
      const nameOfRestaurant = this.restaurant.name;
      const key = 'p';

      this.service.removingOpinion(nameOfRestaurant, key).subscribe(x => {
        const id = this.restaurant.opinions.findIndex(i => x.key === key);
        this.restaurant.opinions.splice(id, 1);
      });
    }
  }

  onRemoveDish(dish): void {
    if (confirm('Are you sure?')) {
      this.service.removingDish(dish.name, this.restaurant.name).subscribe(x => {
        const id = this.restaurant.menu.findIndex(i => i.name === dish.name);
        this.restaurant.menu.splice(id, 1);
      });
    }
  }

  onEditDish(dish: Menu): void {
    this.showForm = true;
    this.edit = true;
    this.form.setValue({
      name: dish.name,
      description: dish.description,
      imagePath: dish.imagePath,
      price: dish.price
    });
  }

  onRemoveRestaurant(): void {
    if (confirm('Are you sure?')) {
      this.service.removingRestaurant(this.restaurant.name).subscribe((res) => {
        const id = this.service.restaurants.findIndex(i => i.name === res.name);
        this.service.restaurants.splice(id, 1);
      });
    }
  }
}
