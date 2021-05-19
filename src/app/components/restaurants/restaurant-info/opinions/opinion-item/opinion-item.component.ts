import {Component, Input, OnInit} from '@angular/core';
import {Opinion} from '../../../../../restaurant.model';

@Component({
  selector: 'app-opinion-item',
  templateUrl: './opinion-item.component.html',
  styleUrls: ['./opinion-item.component.scss']
})
export class OpinionItemComponent implements OnInit {
  @Input() opinion: Opinion;

  constructor() {
  }

  ngOnInit(): void {
  }

}
