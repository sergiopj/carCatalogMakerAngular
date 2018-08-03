import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';



// routes config
const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' } // default route
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });


