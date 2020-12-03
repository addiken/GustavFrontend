import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdvertComponent } from './advert/advert.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {RouterModule, Routes} from '@angular/router';
import { AddAdvertComponent } from './add-advert/add-advert.component';
import { HomeComponent } from './home/home.component';
import { BigAdvertComponent } from './big-advert/big-advert.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'addAdvert', component: AddAdvertComponent},
  {path: 'bigAdvert/:id', component: BigAdvertComponent}
];

@NgModule({
  declarations: [AppComponent, AdvertComponent, HeaderComponent, AddAdvertComponent, HomeComponent, BigAdvertComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
