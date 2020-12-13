import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public kauth: AuthService) { }
  ngOnInit(): void {
    this.kauth.isAuth = (localStorage.getItem('phone') !== null) && (localStorage.getItem('password') !== null);
  }
  onAdd(): void{
    if (this.kauth.isAuth === true) {
      this.router.navigate(['addAdvert']);
    } else {
      this.router.navigate(['auth']);
    }
  }
  onClick(): void {
    this.router.navigate(['auth']);
  }
}
