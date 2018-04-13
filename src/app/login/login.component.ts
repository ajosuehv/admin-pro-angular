import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

declare function load_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _router: Router) { }

  ngOnInit() {
    load_plugins();
  }

  login() {
    this._router.navigate( [ '/dashboard' ] );
  }

}
