import {RouterModule, Routes} from '@angular/router';

import {ModuleWithProviders} from "@angular/core";
import {LayoutComponent} from "./layout/layout.component";


const appRoutes: Routes = [
    {path: '', component: LayoutComponent},

];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);