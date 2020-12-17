import { Component, OnInit } from '@angular/core';
import {Advert} from '../entity/Advert';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update-advert',
  templateUrl: './update-advert.component.html',
  styleUrls: ['./update-advert.component.css']
})
export class UpdateAdvertComponent implements OnInit {

  id: number;
  advertClass: Advert;
  advert: any = {
    district: '',
    street: '',
    houseNumber: '',
    area: '',
    floor: '',
    rooms: '',
    description: '',
    price: '',
  };
  private subscription: Subscription;
  constructor(public router: Router, private activateRoute: ActivatedRoute, private http: HttpClient){
    this.subscription = activateRoute.params.subscribe(params => this.id = params.id);
  }
  ngOnInit(): void {
    this.GetAdvertById();
  }
  // tslint:disable-next-line:typedef
  GetAdvertById() {
    this.http.get('https://localhost:5001/Advert/api/GetAdvert?id=' + this.id)
      .subscribe((advert: any) => {
        this.advertClass = new Advert(
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
          advert.ownerPhone);
      });
  }
  // tslint:disable-next-line:typedef
  sendForm(form: NgForm){
    this.advert = form.value;
    console.log(this.advert);
    this.EditAdvert();
    this.router.navigate(['personal-account']);
  }
  // tslint:disable-next-line:typedef
  EditAdvert() {
    const headers = {'Content-Type': 'application/json'};
    this.http.post('https://localhost:5001/Advert/api/EditAdvert', {
      phone: localStorage.getItem('phone'),
      password: localStorage.getItem('password'),
      id: this.advertClass.Id,
      district: this.advert.district,
      street: this.advert.street,
      houseNumber: this.advert.houseNumber,
      area: this.advert.area,
      floor: this.advert.floor,
      rooms: this.advert.rooms,
      description: this.advert.description,
      price: this.advert.price,
      ownerName: localStorage.getItem('name'),
      ownerPhone: localStorage.getItem('phone')
    }, {headers}).subscribe();
  }
}
