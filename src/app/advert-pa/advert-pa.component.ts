import {Component, Input, OnInit} from '@angular/core';
import {Advert} from '../entity/Advert';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-advert-pa',
  templateUrl: './advert-pa.component.html',
  styleUrls: ['./advert-pa.component.css']
})
export class AdvertPaComponent {
  @Input() advert: Advert;
  constructor(private http: HttpClient, public router: Router) {
  }
  // tslint:disable-next-line:typedef
  DeleteAdvert() {
    this.http.delete('https://localhost:5001/Advert/api/DeleteAdvert?id=' + this.advert.Id +
      '&phone=' + localStorage.getItem('phone') +
      '&password=' + localStorage.getItem('password')).subscribe();
  }
  // tslint:disable-next-line:typedef
  UpdateAdvert() {
    this.router.navigate(['personal-account/update-advert', this.advert.Id]);
  }
}
