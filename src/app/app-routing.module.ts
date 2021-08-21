import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { EmpComponent } from './emp/emp.component';
import { EmplistmainComponent } from './emplistmain/emplistmain.component';
import { HomeComponent } from './home/home.component';

const myroutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'emp', component: EmpComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'emplistmain', component: EmplistmainComponent },
  { path: 'emplistmain/:id', component: EmplistmainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(myroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
