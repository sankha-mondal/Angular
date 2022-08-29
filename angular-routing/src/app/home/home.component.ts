import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  user: string = "";

  constructor(public router: Router) { }  // DI for Router API

  ngOnInit(): void {
    // this.user = sessionStorage.getItem("obj"); Error ❌❌❌
    let obj = sessionStorage.getItem("user");  //  to see the user name that comes from login.component.ts
    if(obj!=null) {
      this.user = obj;
    }
  }

  logout() {
    sessionStorage.removeItem("user");
    this.router.navigate(["login"],{skipLocationChange:true});
  }

}
