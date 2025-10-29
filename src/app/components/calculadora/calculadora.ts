import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './calculadora.html',
  styleUrls: ['./calculadora.css']
})
export class Calculadora {
  a: number = 0;
  b: number = 0;
  res: number = 0;

  sumar() {
    this.res = this.a + this.b;
  }

  restar() {
    this.res = this.a - this.b;
  }

  multiplicar() {
    this.res = this.a * this.b;
  }

  dividir() {
    this.res = this.a / this.b;
  }
}
