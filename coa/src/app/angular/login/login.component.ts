import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = 'v13nr'
  password = ''

  constructor() { }

  ngOnInit() {
  }

  handleLogin(){
    console.log(this.username)
  }
}
