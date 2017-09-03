import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {authRouting} from "./auth-routing.module";
import {AuthComponent} from "./auth.component";
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import {LoginModule} from "./login/login.module";
import { SignupComponent } from './signup/signup.component';

@NgModule({
    imports: [
        CommonModule,
        LoginModule,
        authRouting
    ],
    declarations: [
        AuthComponent,
        FooterComponent,
        LoginComponent,
        SignupComponent
    ]
})
export class AuthModule {
}
