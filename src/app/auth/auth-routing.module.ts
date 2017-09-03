import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from "./auth.component";

// const routes: Routes = [
//     {path: '', component: AuthComponent}
// ];

const authRoutes: Routes = [
    {path: '', component: AuthComponent}
];

export const authRouting: ModuleWithProviders = RouterModule.forRoot(authRoutes);