import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-template-df-with-two-way-binding',
  templateUrl: './template-df-with-two-way-binding.component.html',
  styleUrls: ['./template-df-with-two-way-binding.component.css']
})
export class TemplateDfWithTwoWayBindingComponent implements OnInit {

  constructor(private ems: EmailService) { }

  ngOnInit(): void {
  }

//=====================================  Template DF with 2-way data bunding ==================================

  email = {
    recipient: "",
    subject: "",
    msgBody: ""
  }

  flag: boolean = false;

  send_email() {
       console.log("Sending Email...");
       console.log("DATA: ",this.email);
    if(this.email.recipient=='' || this.email.subject=='' || this.email.msgBody=='') {
      alert("fields should not be empty !!");
    }
    else {
      this.flag = true; 
      // this.ems.send_email(this.email).subscribe(
      //   result=> {
      //     // success
      //     this.flag = false;
      //     alert(result);
      //   }, error=> {
      //     // error
      //     this.flag = false;
      //     alert(error)
      //   }
      // )
    }
  }


}
