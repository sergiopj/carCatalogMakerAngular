import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthguardGuard } from './services/authguard.guard';



// routes config
const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent }, // login page
    { path: 'dashboard', canActivate: [AuthguardGuard], component: DashboardComponent }, // main page
    { path: '**', pathMatch: 'full', redirectTo: 'login' } // default route
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });


