import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './angular/login/login.component';
import { WelcomeComponent } from './angular/welcome/welcome.component';
import { ErrorComponent } from './angular/error/error.component';

const routes: Routes = [
  {    path:'', component: LoginComponent  },
  {    path:'welcome', component: WelcomeComponent  },
  {    path:'login', component: LoginComponent  },
  {    path:'**', component: ErrorComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
