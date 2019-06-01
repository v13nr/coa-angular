import { Component, OnInit } from '@angular/core';
//import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  message = 'Welcome to Indonesia, let say'

  constructor() { }

  ngOnInit() {
    //this.message = 5
    console.log(this.message)
  }

}

export class classNanangRustianto{

}

export class class_081235401617{

}
