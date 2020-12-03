import {Component, Input, OnInit} from '@angular/core';
import {Advert} from '../entity/Advert';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent {
  @Input() advert: Advert;
}
