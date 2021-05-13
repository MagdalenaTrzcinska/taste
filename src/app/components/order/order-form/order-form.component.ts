import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  @ViewChild('f') form: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.form);
  }
}
