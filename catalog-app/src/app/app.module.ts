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


// services
import { UserService } from './services/user.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SelectElementsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
