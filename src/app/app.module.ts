import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ContactComponent } from './contact/contact.component';
import {RouterModule,Routes} from '@angular/router';

const appRoutes:Routes=[
  {
    path:"",component:HomeComponent
  },
  {
    path:"addtocart",component:AddtocartComponent
  },
  {
    path:"contact",component:ContactComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddtocartComponent,
    ContactComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
