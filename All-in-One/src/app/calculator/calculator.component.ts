import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  num1: number = 0;
  num2: number = 0;
  result: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    this.result = this.num1+this.num2;
  }
  sub(): void {
    this.result = this.num1-this.num2;
  }
  mul(): void {
    this.result = this.num1*this.num2;
  }
  div(): void {
    this.result = this.num1/this.num2;
  }
}
