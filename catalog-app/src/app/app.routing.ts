import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SelectElementsComponent } from './components/select-elements/select-elements.component';
import { LoginComponent } from './components/login/login.component';

// routes config
const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent }, // public
    { path: 'contact', component: ContactComponent }, // public
    { path: 'select-elements', component: SelectElementsComponent }, // private, need auth
    { path: '**', pathMatch: 'full', redirectTo: 'login' } // default route
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });


