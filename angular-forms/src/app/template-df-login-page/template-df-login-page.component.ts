import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-template-df-login-page',
  templateUrl: './template-df-login-page.component.html',
  styleUrls: ['./template-df-login-page.component.css']
})
export class TemplateDfLoginPageComponent implements OnInit {

  msg: string = "";

  constructor(public ls: LoginService) { }    //  DI means pull the Object

  ngOnInit(): void {
  }
 
  checkUser(loginRef: NgForm) {   
   // console.log(login);  

    //  Using IOC(Inversion of Control) & DI(Dependency Injection) :-
    //  To control the life cycle of Object:
    /*
    let login = loginRef.value; 
    this.msg = this.ls.checkUserCondition(login);
    
    loginRef.reset();
    */

  //---------------------------------------------------------------------
     
    //  For normal template-df Conditions :-

    
    let login = loginRef.value;  
    if( login.email=="ssm@gmail.com" && login.password=="123@abc" ) {
      this.msg = "Login Successfully...Using normal Condition";
      alert(this.msg);
    } else {
      this.msg = "Login Failure...Using normal Condition";
      alert(this.msg);
    }   
    loginRef.reset();
    
    
//---------------------------------------------------------------------

    //  Calling our own Custom Srevice conditions :-

    /*
    let login = loginRef.value;
    let obj = new CustomService();
    this.msg = obj.checkUserCondition(login);

    loginRef.reset();
    */


  } 
}
