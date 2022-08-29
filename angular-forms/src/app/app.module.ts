import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDfLoginPageComponent } from './template-df-login-page/template-df-login-page.component';
import { ModelDfLoginPageComponent } from './model-df-login-page/model-df-login-page.component';
import { LoginService } from './login.service';
import { TemplateDfWithTwoWayBindingComponent } from './template-df-with-two-way-binding/template-df-with-two-way-binding.component';
import { EmailService } from './email.service';



@NgModule({
  declarations: [
    AppComponent,
    TemplateDfLoginPageComponent,
    ModelDfLoginPageComponent,
    TemplateDfWithTwoWayBindingComponent,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [LoginService, EmailService],    //  register the srevice class details.
  bootstrap: [AppComponent]
})
export class AppModule { }
