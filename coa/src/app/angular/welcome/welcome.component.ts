import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  message = 'Welcome to Indonesia, let say'
  name = ''

  //dependency of ActivatedRoute
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //this.message = 5
    console.log(this.message)
    console.log(this.route.snapshot.params["name"])
    this.name = this.route.snapshot.params["name"]
  }

}

export class classNanangRustianto{

}

export class class_081235401617{

}
