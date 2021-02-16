import { Component } from '@angular/core';
import {AuthService} from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mm8bitdm-friends';
  constructor(private _authService:AuthService){}
}
