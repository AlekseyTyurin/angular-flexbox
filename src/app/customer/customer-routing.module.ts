import {NgModule, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from "./customer.component";

const customerRoutes: Routes = [
  {path: '', component: CustomerComponent}
];

export const authRouting: ModuleWithProviders = RouterModule.forRoot(customerRoutes);
