import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from 'src/app/v13nr/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //isUserLoggedIn: boolean = false

  constructor(
    private hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit() {
    //this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn()
  }

}
