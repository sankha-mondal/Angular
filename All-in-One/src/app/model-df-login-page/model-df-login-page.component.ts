import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomService } from '../custom.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-model-df-login-page',
  templateUrl: './model-df-login-page.component.html',
  styleUrls: ['./model-df-login-page.component.css']
})
export class ModelDfLoginPageComponent implements OnInit {

  msg: string = "";

  loginRef = new FormGroup({
      //  it is required to the attribute in html page
      // email: new FormControl(),
      // password: new FormControl()
      email: new FormControl( "", [Validators.required, Validators.minLength(3), Validators.pattern("[a-z]+[0-9]*@gmail.com")] ),
      password: new FormControl( "", [Validators.required, Validators.minLength(4), Validators.pattern("[0-9]*[a-z]*@[a-z]*[0-9]*")])
  }) ;


  constructor(public ls: LoginService) { }    //  DI means pull the Object

  ngOnInit(): void {
  }
  
checkUser() {   //  calling from mdf-lp-component.html 

  //  Using IOC(Inversion of Control) & DI(Dependency Injection) :-
  //  To control the life cycle of Object

  /*
  let login = this.loginRef.value;
  this.msg = this.ls.checkUserCondition(login);   //  checkUserCondition() method of LoginService Class
  this.loginRef.reset();
  */

//----------------------------------------------------------------------------------------------------

  //  For normal model-df Conditions:-

  let login = this.loginRef.value;
  
  if( login.email=="ssm@gmail.com" && login.password=="123@abc" ) {
    this.msg = "Login Successfully...Using normal Condition";
    alert(this.msg);
  } else {
    this.msg = "Login failure...Using normal Condition";
    alert(this.msg);
  }
  this.loginRef.reset();
  

//--------------------------------------------------------------------------------------------------------

  //  Calling our own Custom Srevice class conditions:-
  /*
  let login = this.loginRef.value;
  let obj = new CustomService();
  this.msg = obj.checkUserCondition(login);   //  checkUserCondition() method of CustomService Class
  this.loginRef.reset();
  */


  }


}
