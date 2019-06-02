import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './angular/login/login.component';
import { WelcomeComponent } from './angular/welcome/welcome.component';
import { ErrorComponent } from './angular/error/error.component';
import { ListCoasComponent } from './angular/list-coas/list-coas.component';
import { LogoutComponent } from './angular/logout/logout.component';
import { RouteGuardService } from './v13nr/route-guard.service';

const routes: Routes = [
  {    path:'', component: LoginComponent  },
  {    path:'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]  },
  {    path:'coas', component: ListCoasComponent, canActivate:[RouteGuardService]   },
  {    path:'login', component: LoginComponent  },
  {    path:'logout', component: LogoutComponent, canActivate:[RouteGuardService]   },
  {    path:'**', component: ErrorComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
