import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Restaurant} from './restaurant.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestuarantsService {
  restaurants: Restaurant[];
  filteredRestaurants: Restaurant[] = [];

  constructor(private http: HttpClient) {
    this.getting();
  }

  onSearch(city: string): void {
    for (const restaurant of this.restaurants) {
      if (restaurant.location === city) {
        this.filteredRestaurants.push(restaurant);
      }
    }
  }

  getting(): void {
    this.http.get<{ [name: string]: Restaurant }>('https://restaurants-668f1-default-rtdb.firebaseio.com/restuarants.json')
      .pipe(
        map(responseData => {
          const pastArray: Restaurant[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              pastArray.push({...responseData[key], name: key});
            }
          }
          return pastArray;
        })
      )
      .subscribe(posts => {
        this.restaurants = posts;
      });

  }
}
