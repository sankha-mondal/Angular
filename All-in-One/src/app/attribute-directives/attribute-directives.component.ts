import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css']
})
export class AttributeDirectivesComponent implements OnInit {

  styProperty = {'color':'green','font-size':'30px'};

  constructor() { }

  ngOnInit(): void {
  }

}
