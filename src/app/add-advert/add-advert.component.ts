import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-advert',
  templateUrl: './add-advert.component.html',
  styleUrls: ['./add-advert.component.css']
})
export class AddAdvertComponent {
  constructor(private http: HttpClient) {}
  advert: any = {
    district: '',
    street: '',
    houseNumber: '',
    area: '',
    floor: '',
    rooms: '',
    description: '',
    price: '',
    ownerName: '',
    ownerPhone: '',
  };
  // tslint:disable-next-line:typedef
  sendForm(form: NgForm){
    this.advert = form.value;
    this.CreateAdvert();
  }
  // tslint:disable-next-line:typedef
  CreateAdvert() {
    const headers = {'Content-Type': 'application/json'};
    this.http.post('https://localhost:5001/Advert/api/CreateAdvert', {
      district: this.advert.district,
      street: this.advert.street,
      houseNumber: this.advert.houseNumber,
      area: this.advert.area,
      floor: this.advert.floor,
      rooms: this.advert.rooms,
      description: this.advert.description,
      price: this.advert.price,
      ownerName: this.advert.ownerName,
      ownerPhone: this.advert.ownerPhone
    }, {headers}).subscribe();
  }
}
