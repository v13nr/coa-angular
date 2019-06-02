import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from 'src/app/v13nr/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = 'v13nr'
  password = ''
  errorMessage = 'Invalid Credential'
  invalidLogin = false

  //dependency injection with router
  constructor(
    private router: Router,
    private hardcodedAuthenticationService:HardcodedAuthenticationService
    ) { }

  ngOnInit() {
  }

  handleLogin(){
    // console.log(this.username)
    // if(this.username==='v13nr' && this.password === 'admin'){
      if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
        this.invalidLogin = false
        this.router.navigate(['welcome', this.username])
    } else {
        this.invalidLogin = true
    }
  }
}
