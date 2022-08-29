import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  lname: String = "Piter";

  f1:boolean = false;
  f2:boolean = false;
  f3: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
