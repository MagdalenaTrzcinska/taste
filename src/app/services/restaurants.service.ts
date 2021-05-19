import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Menu, Opinion, Restaurant, SelectedDish} from '../restaurant.model';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  restaurants: Restaurant[];
  filteredRestaurants: Restaurant[] = [];
  selectedDishes: SelectedDish[] = [];

  loggedIn = false;
  showALoginForm = false;
  error = false;

  constructor(private http: HttpClient) {
    this.getting();
  }

  searchingRestaurants(city: string): void {
    for (const restaurant of this.restaurants) {
      if (restaurant.location === city) {
        this.filteredRestaurants.push(restaurant);
      }
    }
  }

  openingTheLoginForm(): void {
    this.showALoginForm = !this.showALoginForm;
    this.error = false;
  }

  getting(): void {
    this.http.get<{ Restaurant }>('https://restaurants-668f1-default-rtdb.firebaseio.com/restuarants.json')
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
      });
  }

  addingDish(amount: number, dish: Menu): void {
    const d = {dish, amount};
    const id = this.selectedDishes.findIndex(x => x.dish === dish);
    if (id !== -1) {
      this.selectedDishes[id].amount++;
    } else {
      this.selectedDishes.push(d);
    }
  }

  postingOpinion(opinion: { star: number, description: string }, name: string): Observable<Opinion> {
    // tslint:disable-next-line:max-line-length
    return this.http.post<Opinion>('https://restaurants-668f1-default-rtdb.firebaseio.com/restuarants/' + name + '/opinions.json',
      opinion);
  }

  removingOpinion(name: string, id: string): Observable<any> {
    return this.http.delete('https://restaurants-668f1-default-rtdb.firebaseio.com/restuarants/' + name + '/opinions/' + id + '.json');
  }

  postingDish(menu: Menu, restaurant: string): Observable<Menu> {
    return this.http.put<Menu>
    (`https://restaurants-668f1-default-rtdb.firebaseio.com/restuarants/${restaurant}/menu/${menu.name}.json`,
      menu);
  }

  removingDish(dish: string, restaurant: string): Observable<any> {
    return this.http.delete('https://restaurants-668f1-default-rtdb.firebaseio.com/restuarants/' + restaurant + '/menu/' + dish + '.json');
  }

  postingRestaurant(restaurant: Restaurant): Observable<any> {
    return this.http.put('https://restaurants-668f1-default-rtdb.firebaseio.com/restuarants/' + restaurant.name + '.json', restaurant);
  }

  removingRestaurant(restaurant: string): Observable<any> {
    return this.http.delete('https://restaurants-668f1-default-rtdb.firebaseio.com/restuarants/' + restaurant + '.json');
  }


}
