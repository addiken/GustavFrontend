import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../entity/User';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  private user: User;
  private u: any = {phone: '', password: ''};

  constructor(private router: Router, private http: HttpClient, public auth: AuthService) { }
  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
  // tslint:disable-next-line:typedef
  sendForm(form: NgForm) {
    this.u = form.value;
    this.CheckUser();
    localStorage.setItem('id', String(this.user.Id));
    localStorage.setItem('name', this.user.Name);
    localStorage.setItem('surname', this.user.Surname);
    localStorage.setItem('phone', this.user.Phone);
    localStorage.setItem('password', this.user.Password);
    if (localStorage.getItem('id')) {
      this.auth.isAuth = true;
      this.router.navigate(['']);
    }
  }
  // tslint:disable-next-line:typedef
  CheckUser() {
    this.http.get('https://localhost:5001/User/api/CheckUser?phone='
      + this.u.phone + '&password=' + this.u.password).subscribe((user: any) => {
      this.user = new User(user.id, user.name, user.surname, user.phone, user.password);
      });
  }
}
