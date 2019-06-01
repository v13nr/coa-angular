import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './angular/welcome/welcome.component';
import { LoginComponent } from './angular/login/login.component';
import { ErrorComponent } from './angular/error/error.component';
import { ListCoasComponent } from './angular/list-coas/list-coas.component';
import { MenuComponent } from './angular/menu/menu.component';
import { FooterComponent } from './angular/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListCoasComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
