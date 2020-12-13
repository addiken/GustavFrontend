import { Component, OnInit } from '@angular/core';
import {Advert} from '../entity/Advert';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  adverts: any;
  constructor(private http: HttpClient) {}
  // tslint:disable-next-line:typedef
  GetAllAdverts() {
    this.http.get('https://localhost:5001/Advert/api/GetAllAdverts')
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
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.GetAllAdverts();
  }
}
