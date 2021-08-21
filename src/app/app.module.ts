import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmpComponent } from './emp/emp.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EmplistComponent } from './emp/emplist/emplist.component';
import { EmplistmainComponent } from './emplistmain/emplistmain.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpComponent,
    ContactusComponent,
    EmplistComponent,
    EmplistmainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
