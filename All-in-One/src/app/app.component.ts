import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'welcome-app';
  school = 'Spring Flowers school';
  name:string = "Sannkha Subhra Mondal";
  roll:number = 73;
  age:number = 22;
  company:string = "Wipro";
  public role = "Software Developer"
  getfun() {
    return "Get function data";
  }
  public message = "";





  
}
