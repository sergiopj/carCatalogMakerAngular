import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SelectElementsComponent } from './components/select-elements/select-elements.component';



// routes config
const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'select_elements', component: SelectElementsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' } // default route
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });


