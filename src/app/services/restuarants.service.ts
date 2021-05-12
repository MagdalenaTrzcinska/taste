import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Menu, Opinion, Restaurant, SelectedDish} from '../restaurant.model';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestuarantsService {
  restaurants: Restaurant[];
  filteredRestaurants: Restaurant[] = [];
  selectedDishes: SelectedDish[] = [];

  login = false;
  error = false;

  constructor(private http: HttpClient) {
    this.getting();
  }

  searchHotels(city: string): void {
    for (const restaurant of this.restaurants) {
      if (restaurant.location === city) {
        this.filteredRestaurants.push(restaurant);
      }
    }
  }

  getting(): void {
    this.http.get<{ Restaurant }>('https://restaurants-668f1-default-rtdb.firebaseio.com/restuarants.json')
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

  openingLogin(): void {
    this.login = !this.login;
    this.error = false;
  }

  addingDish(amount: number, dish: Menu): void {
    const d = {dish, amount};
    this.selectedDishes.push(d);

    console.log(this.selectedDishes);
  }

  addingOpinion(opinion: Opinion, name: string, lengthOfOpinion: number): Observable<Opinion> {
    return this.http.put<Opinion>('https://restaurants-668f1-default-rtdb.firebaseio.com/restuarants/' + name + '/opinions/' + lengthOfOpinion + '.json',
      opinion);
  }
}
