import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  name1 = '';
  dob1: any;
  email1 = '';
  num1: number;
  today = new Date();
  minAge = 18;
  show = false;

  constructor() {}

  ngOnInit() {
    this.minAge = new Date(this.today.getFullYear() - this.minAge, this.today.getMonth(), this.today.getDate());
  }

  submit() {
    this.show = true;

  }
}
