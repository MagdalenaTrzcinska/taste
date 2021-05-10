import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RestuarantInfoComponent } from './components/restaurants/restuarant-info/restuarant-info.component';
import {HttpClientModule} from '@angular/common/http';
import { NameChangePipe } from './pipes/name-change.pipe';
import { MenuItemComponent } from './components/restaurants/restuarant-info/menu-item/menu-item.component';
import { NoSelectedRestaurantComponent } from './components/restaurants/no-selected-restaurant/no-selected-restaurant.component';
import { OpinionItemComponent } from './components/restaurants/restuarant-info/opinion-item/opinion-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PanelComponent } from './components/main-page/panel/panel.component';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RestaurantsComponent,
    NotFoundComponent,
    RestuarantInfoComponent,
    NameChangePipe,
    MenuItemComponent,
    NoSelectedRestaurantComponent,
    OpinionItemComponent,
    PanelComponent,
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
    MatIconModule
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
