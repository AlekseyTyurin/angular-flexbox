import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from "./auth.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";

// const routes: Routes = [
//     {path: '', component: AuthComponent}
// ];

const authRoutes: Routes = [
    {path: '', component: AuthComponent},
    {path: 'auth/login', component: LoginComponent},
    {path: 'auth/signup', component: SignupComponent}
];

export const authRouting: ModuleWithProviders = RouterModule.forRoot(authRoutes);