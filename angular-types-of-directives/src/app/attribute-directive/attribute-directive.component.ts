import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent implements OnInit {

  styProperty = {'color':'green','font-size':'30px'};

  constructor() { }

  ngOnInit(): void {
  }

}
