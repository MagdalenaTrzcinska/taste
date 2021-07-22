import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Menu, Opinion, Restaurant, SelectedDish} from '../restaurant.model';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  URL = 'https://restaurants-668f1-default-rtdb.firebaseio.com/restuarants';

  restaurants: Restaurant[];
  filteredRestaurants: Restaurant[] = [];
  selectedDishes: SelectedDish[] = [];

  isLoggedIn = false;

  constructor(private http: HttpClient) {
    this.getting();
  }

  searchingRestaurants(city: string): void {
    this.filteredRestaurants = [];
    for (const restaurant of this.restaurants) {
      if (restaurant.location === city) {
        this.filteredRestaurants.push(restaurant);
      }
    }
  }

  getting(): void {
    this.http.get<{ Restaurant }>(`${this.URL}.json`)
      .pipe(
        map(responseData => {
          const pastArray: Restaurant[] = [];
          let opinions: Opinion[];
          let menu: Menu[];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              opinions = [];
              menu = [];
              for (const k in responseData[key].opinions) {
                if (responseData[key].opinions.hasOwnProperty(k)) {
                  opinions.push({...responseData[key].opinions[k], key: k});
                }
              }
              for (const keyMenu in responseData[key].menu) {
                if (responseData[key].menu.hasOwnProperty(keyMenu)) {
                  menu.push({...responseData[key].menu[keyMenu], name: keyMenu});
                }
              }

              pastArray.push({...responseData[key], menu, opinions, name: key});
            }
          }
          return pastArray;
        })
      )
      .subscribe(posts => {
        this.restaurants = posts;
        console.log(posts);
      });
  }

  postingOpinion(opinion: { star: number, description: string }, name: string): Observable<Opinion> {
    return this.http.post<Opinion>(`${this.URL}/'${name}'/opinions.json`,
      opinion);
  }

  removingOpinion(name: string, key: string): Observable<any> {
    return this.http.delete(`${this.URL}/${name}/opinions/${key}.json`);
  }

  postingDish(menu: Menu, restaurant: string): Observable<Menu> {
    return this.http.put<Menu>
    (`${this.URL}/${restaurant}/menu/${menu.name}.json`,
      menu);
  }

  removingDish(dish: string, restaurant: string): Observable<any> {
    return this.http.delete(`${this.URL}/${restaurant}/menu/${dish}.json`);
  }

  postingRestaurant(restaurant: Restaurant): Observable<any> {
    return this.http.put(`${this.URL}/${restaurant.name}.json`, restaurant);
  }

  removingRestaurant(restaurant: string): Observable<any> {
    return this.http.delete(`${this.URL}/restaurants/${restaurant}.json`);
  }
}
