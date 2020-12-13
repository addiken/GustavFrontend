import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {
  u: any;
  constructor(private router: Router, private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  sendForm(form: NgForm) {
    this.u = form.value;
    console.log(this.u);
    this.AddUser();
    this.router.navigate(['auth']);
  }
  // tslint:disable-next-line:typedef
  AddUser(){
    const headers = {'Content-Type': 'application/json'};
    this.http.post('https://localhost:5001/User/api/CreateUser', {
      name: this.u.name,
      surname: this.u.surname,
      phone: this.u.phone,
      password: this.u.password
    }, {headers}).subscribe();
  }
}
