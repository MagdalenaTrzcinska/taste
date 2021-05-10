import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RestuarantsService} from '../../services/restuarants.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private route: Router, public service: RestuarantsService) {
  }

  ngOnInit(): void {
  }

  onOpenLogin(): void {
    this.service.openingLogin();
  }

  onSearch(city): void {
    this.service.searchHotels(city);
    this.route.navigate(['restaurants']);
  }
}
