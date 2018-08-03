import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules from angular core
import { FormsModule } from '@angular/forms';
// components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/common/header/header.component';
// config
import { APP_ROUTING } from './app.routing';
import { HomeComponent } from './components/home/home.component';
// services





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
