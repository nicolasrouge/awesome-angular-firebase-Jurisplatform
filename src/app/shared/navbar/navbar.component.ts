import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  activetab = 'home';
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  getActiveTab(tabname: string) {
    this.activetab = tabname;
  }

}
