import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Advert} from '../entity/Advert';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-personal-account',
  templateUrl: './personal-account.component.html',
  styleUrls: ['./personal-account.component.css']
})
export class PersonalAccountComponent implements OnInit {
  adverts: any;
  name: any;
  surname: any;
  phone: any;
  constructor(private http: HttpClient, private router: Router, public kauth: AuthService) {}
  // tslint:disable-next-line:typedef
  GetAllAdverts() {
    this.http.get('https://localhost:5001/Advert/api/GetUserAdverts?phone=' + localStorage.getItem('phone'))
      .subscribe((adverts: any) => {
        this.adverts = adverts.map(advert => new Advert(
          advert.id,
          advert.district,
          advert.street,
          advert.houseNumber,
          advert.area,
          advert.floor,
          advert.rooms,
          advert.description,
          advert.price,
          advert.ownerName,
          advert.ownerPhone));
      });
  }
  ngOnInit(): void {
    this.GetAllAdverts();
    this.name = localStorage.getItem('name');
    this.surname = localStorage.getItem('surname');
    this.phone = localStorage.getItem('phone');
  }
  onClick(): void {
    localStorage.clear();
    this.kauth.isAuth = false;
    this.router.navigate(['']);
  }
}
