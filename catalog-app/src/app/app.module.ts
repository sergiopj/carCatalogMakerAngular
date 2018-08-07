import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules from angular core
import { FormsModule } from '@angular/forms';
// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SelectElementsComponent } from './components/select-elements/select-elements.component';

// config
import { APP_ROUTING } from './app.routing';


// services
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';

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
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
