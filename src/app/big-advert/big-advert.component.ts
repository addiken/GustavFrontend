import {Component, OnInit} from '@angular/core';
import {Advert} from '../entity/Advert';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-big-advert',
  templateUrl: './big-advert.component.html',
  styleUrls: ['./big-advert.component.css']
})
export class BigAdvertComponent implements OnInit{
  id: number;
  advert: Advert;
  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute, private http: HttpClient){
    this.subscription = activateRoute.params.subscribe(params => this.id = params.id);
  }
  ngOnInit(): void {
    this.GetAdvertById();
  }
  // tslint:disable-next-line:typedef
  GetAdvertById() {
    this.http.get('https://localhost:5001/Advert/api/GetAdvert?id=' + this.id)
      .subscribe((advert: any) => {
        this.advert = new Advert(
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
}
