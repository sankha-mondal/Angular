import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

// This variable can hold routing rules which helps to nevigate from
// one component to another component 
// http://localhost:4200/
// http://localhost:4200/aboutus
// this path works on that component
const routes: Routes = [
  {path:"aboutus", component:AboutusComponent},
  {path:"contactus", component:ContactusComponent},
  {path:"feedback", component:FeedbackComponent},
  {path:"login", component:LoginComponent},
  {path:"home", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],   //  forRoot means rule applied for whole module
  exports: [RouterModule]
})
export class AppRoutingModule { }
