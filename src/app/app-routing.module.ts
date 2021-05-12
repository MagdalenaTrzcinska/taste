import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './components/main-page/main-page.component';
import {RestaurantsComponent} from './components/restaurants/restaurants.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {RestuarantInfoComponent} from './components/restaurants/restuarant-info/restuarant-info.component';
import {NoSelectedRestaurantComponent} from './components/restaurants/no-selected-restaurant/no-selected-restaurant.component';
import {PanelComponent} from './components/panel/panel.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'restaurants', component: RestaurantsComponent, children: [
      {path: '', component: NoSelectedRestaurantComponent, pathMatch: 'full'},
      {path: ':name', component: RestuarantInfoComponent},
    ]},
  {path: 'panel', component: PanelComponent},
  {path: '**', redirectTo: 'not-found'},
  {path: 'not-found', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
