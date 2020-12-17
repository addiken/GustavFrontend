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
import { AuthComponent } from './auth/auth.component';
import { RegComponent } from './reg/reg.component';
import { PersonalAccountComponent } from './personal-account/personal-account.component';
import { AdvertPaComponent } from './advert-pa/advert-pa.component';
import { UpdateAdvertComponent } from './update-advert/update-advert.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'addAdvert', component: AddAdvertComponent},
  {path: 'bigAdvert/:id', component: BigAdvertComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'auth/reg', component: RegComponent},
  {path: 'personal-account', component: PersonalAccountComponent},
  {path: 'personal-account/bigAdvert/:id', component: BigAdvertComponent},
  {path: 'personal-account/update-advert/:id', component: UpdateAdvertComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AdvertComponent,
    HeaderComponent,
    AddAdvertComponent,
    HomeComponent,
    BigAdvertComponent,
    AuthComponent,
    RegComponent,
    PersonalAccountComponent,
    AdvertPaComponent,
    AdvertPaComponent,
    UpdateAdvertComponent
  ],
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
