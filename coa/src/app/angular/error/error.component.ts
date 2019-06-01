import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'Some error happened, contact 62 8 123 540 16**'
  constructor() { }

  ngOnInit() {
  }

}
