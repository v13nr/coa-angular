import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin(){
    // console.log(this.username)
    if(this.username==='v13nr' && this.password === 'admin'){
        this.invalidLogin = false
        this.router.navigate(['welcome'])
    } else {
        this.invalidLogin = true
    }
  }
}
