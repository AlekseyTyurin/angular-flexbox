import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {authRouting} from "./auth-routing.module";
import {AuthComponent} from "./auth.component";
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        authRouting
    ],
    declarations: [
        AuthComponent,
        FooterComponent
    ]
})
export class AuthModule {
}
