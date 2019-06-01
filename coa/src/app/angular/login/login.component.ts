import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  handleLogin(){
    // console.log(this.username)
    if(this.username==='v13nr' && this.password === 'admin'){
        this.invalidLogin = false
    } else {
        this.invalidLogin = true
    }
  }
}
