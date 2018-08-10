import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { HistorialComponent } from './components/historial/historial.component';
import { RegisterComponent } from './components/register/register.component';
import { PlatilloComponent } from './components/platillo/platillo.component';
import { NavbarComponent } from './components/navbar/navbar.component';


//#region  Service
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { PassRecoveryComponent } from './components/pass-recovery/pass-recovery.component';
import { ProfileComponent } from './components/profile/profile.component';
//#endregion


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'shoppingcart', component: CartComponent},
  {path: 'historial', component: HistorialComponent},
  {path: 'login', component: LogInComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dish/:id', component: PlatilloComponent},
  {path: 'pass-recovery', component: PassRecoveryComponent},
  {path: 'profile', component: ProfileComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    AboutComponent,
    CartComponent,
    HistorialComponent,
    RegisterComponent,
    PlatilloComponent,
    NavbarComponent,
    PassRecoveryComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule ,
    AngularFireDatabaseModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
