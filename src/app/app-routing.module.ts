import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {RestaurantsComponent} from './components/restaurants/restaurants.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {NoSelectedRestaurantComponent} from './components/restaurants/no-selected-restaurant/no-selected-restaurant.component';
import {PanelComponent} from './components/panel/panel.component';
import {OrderComponent} from './components/order/order.component';
import {LoginToPanelGuard} from './guard/login-to-panel.guard';
import {PanelRestaurantComponent} from './components/panel/panel-restaurant/panel-restaurant.component';
import {AddRestaurantComponent} from './components/panel/add-restaurant/add-restaurant.component';
import {RestaurantInfoComponent} from './components/restaurants/restaurant-info/restaurant-info.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'restaurants', component: RestaurantsComponent, children: [
      {path: '', component: NoSelectedRestaurantComponent, pathMatch: 'full'},
      {path: ':name', component: RestaurantInfoComponent},
    ]},
  {path: 'panel', component: PanelComponent, canActivate: [LoginToPanelGuard], children: [
      {path: 'add-restaurant', component: AddRestaurantComponent},
      {path: ':name', component: PanelRestaurantComponent},
    ]},
  {path: 'order', component: OrderComponent},
  {path: '**', redirectTo: 'not-found'},
  {path: 'not-found', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
