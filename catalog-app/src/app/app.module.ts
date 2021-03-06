import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules from angular core
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SelectElementsComponent } from './components/select-elements/select-elements.component';
import { LoginComponent } from './components/login/login.component';


// config
import { APP_ROUTING } from './app.routing';

// pipes
import { CurrencyTransPipe } from './pipes/currency-trans.pipe';


// services
import { AuthService } from './services/auth.service';
import { CarDataService } from './services/car-data.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SelectElementsComponent,
    LoginComponent,
    CurrencyTransPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    CarDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
