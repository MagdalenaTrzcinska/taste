import { Component, OnInit } from '@angular/core';
import {RestuarantsService} from '../../services/restuarants.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  correctPassword = 'admin1234';

  constructor(public service: RestuarantsService) { }

  ngOnInit(): void {
  }

  onLogin(password: string): void {
    if (password === this.correctPassword) {
      alert('good');
    } else {
      this.service.error = true;
    }
  }

  changeLogin(): void {
    this.service.openingLogin();
  }
}
