import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {RestaurantsComponent} from './components/restaurants/restaurants.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {NameChangePipe} from './pipes/name-change.pipe';
import {MenuItemComponent} from './components/restaurants/restaurant-info/menu-item/menu-item.component';
import {NoSelectedRestaurantComponent} from './components/restaurants/no-selected-restaurant/no-selected-restaurant.component';
import {OpinionItemComponent} from './components/restaurants/restaurant-info/opinions/opinion-item/opinion-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PanelComponent} from './components/panel/panel.component';
import {LoginToPanelComponent} from './components/main-page/login-to-panel/login-to-panel.component';
import {OrderComponent} from './components/order/order.component';
import {OrderFormComponent} from './components/order/order-form/order-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OpinionsComponent} from './components/restaurants/restaurant-info/opinions/opinions.component';
import {PanelRestaurantComponent} from './components/panel/panel-restaurant/panel-restaurant.component';
import {AddRestaurantComponent} from './components/panel/add-restaurant/add-restaurant.component';
import {AddOpinionComponent} from './components/restaurants/restaurant-info/opinions/add-opinion/add-opinion.component';
import {RestaurantInfoComponent} from './components/restaurants/restaurant-info/restaurant-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RestaurantsComponent,
    NotFoundComponent,
    RestaurantInfoComponent,
    NameChangePipe,
    MenuItemComponent,
    NoSelectedRestaurantComponent,
    OpinionItemComponent,
    PanelComponent,
    LoginToPanelComponent,
    OrderComponent,
    OrderFormComponent,
    OpinionsComponent,
    PanelRestaurantComponent,
    AddRestaurantComponent,
    AddOpinionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule {
}
