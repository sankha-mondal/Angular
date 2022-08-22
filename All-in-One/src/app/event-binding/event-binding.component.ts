  import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  msg: string = "Hi";

  constructor() { }

  ngOnInit(): void {
  }

  fun() {
    alert("Event generated...")
    this.msg = "Hello";
  }

  // Using reference view to component

  passValue(nameRef: any) {
      let name = nameRef.value;
      alert("Welcome user "+name);
  } 
  
}
