import { Component, OnInit } from '@angular/core';
import { Empolyee } from './employee';

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {

//  Working with *ngIf:-

  f1: boolean = true;
  f2: boolean = false;
  f3: boolean = false;
  flag: boolean = false;
  b_name: string = "Show";

  changeValue() {
    this.f3 = true;
  }

  toggle() {
      if(this.flag) {
        this.b_name = "Show";
        this.flag = false;
      } else {
        this.b_name = "Hide";
        this.flag = true;
      }
  }


// ============================================================================================================
// ============================================================================================================


//  Working with *ngFor:-

names: Array<string> = ["Ravi","Ajay","Vijay","Ramesh","Lokesh","Kumar"];

emp:Empolyee = new Empolyee(100, "Ravi", 21);

employees: Array<Empolyee>=[];      //  array of employee memory created

e_id: number = 0;
e_name: string = "name";
e_age: number = 0;

passValue(id: any, name: any, age:any) {
  this.e_id = id.value;
  this.e_name = name.value;
  this.e_age = age.value;

  //  Dynamic data:
  let emp4 = new Empolyee(this.e_id,this.e_name,this.e_age);
  this.employees.push(emp4);
}

constructor() { }
//  it is a life component. it will automatically called when component loaded
//  it will call only once after constractor.
ngOnInit(): void {
  //  Static data:
  let emp1 = new Empolyee(100,"Ajay",23);
  let emp2 = new Empolyee(101,"Vijay",22);
  let emp3 = new Empolyee(102,"Enjay",21);
  this.employees.push(emp1);
  this.employees.push(emp2);
  this.employees.push(emp3);

  // Dynamic data: ❌❌❌
  // let emp4 = new Empolyee(this.e_id,this.e_name,this.e_age);
  // this.employees.push(emp4);
}



}
