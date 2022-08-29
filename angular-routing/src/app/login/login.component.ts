import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRef = new FormGroup ({   // model dForm | for checking email & password
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  msg: string = "";
   
  constructor(public router: Router) { } // DI for Router API

  ngOnInit(): void {
  }

  checkUser() {
    let login = this.loginRef.value;
    /* 
    this.ls.checkUser(login).subscribe(result=> {
      if(result=="success") {
            //  for dynamic if we check from backend technology.
      } else {

      }
    }, error=> console.log(error), ()=>console.log("Done!"));
    */ 
    if(login.email=="ssm@gmail.com" && login.password=="123") {
      sessionStorage.setItem("email", login.email);  // to show email on template.
      sessionStorage.setItem("password", login.password);
      // value can be dynamic if we check from backend technology.
      this.router.navigate(["home"],{skipLocationChange:true});  //  navigate to home page
    } else {
      this.msg = "Email or Password is Wrong";
    }

    this.loginRef.reset();
  }
}
