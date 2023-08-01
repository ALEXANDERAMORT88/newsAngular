import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentDate: string = "";

  constructor() {
    this.getCurrentDate();
  }

  getCurrentDate() {
    const dateOption: Intl.DateTimeFormatOptions = {weekday:'long', month:'long', day:'numeric',year:'numeric'}
    this.currentDate = new Date().toLocaleString('es-ES', dateOption)
  }

}
