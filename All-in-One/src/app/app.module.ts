import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { StractureDirectiveComponent } from './stracture-directive/stracture-directive.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { TemplateDfLoginPageComponent } from './template-df-login-page/template-df-login-page.component';
import { ModelDfLoginPageComponent } from './model-df-login-page/model-df-login-page.component';
import { LoginService } from './login.service';
import { PipeSearchComponent } from './pipe-search/pipe-search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    CalculatorComponent,
    StractureDirectiveComponent,
    AttributeDirectivesComponent,
    TemplateDfLoginPageComponent,
    ModelDfLoginPageComponent,
    PipeSearchComponent,
    FileUploaderComponent,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, Ng2SearchPipeModule, AngularFileUploaderModule,
    HttpClientModule,
  ],
  providers: [LoginService],    //  register the srevice class details.
  bootstrap: [AppComponent]
})
export class AppModule { }
