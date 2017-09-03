import {NgModule, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth/auth.component'
import {CustomerComponent} from './customer/customer.component'
import {DriverComponent} from './driver/driver.component'

const appRoutes: Routes = [
    { path: 'auth', component: AuthComponent },
    { path: 'customer', component: CustomerComponent},
    // {path: '', component: DriverComponent}
    // {
    //     path: '', component: 'CustomerComponent',
    //     //canActivate: [AuthGuard]
    // },
    // { path: 'auth', component: 'AuthComponent' },
    //{ path: '', component: 'DriverComponent' },
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);