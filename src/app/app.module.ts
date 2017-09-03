import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {appRouting} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {AuthModule} from "./auth/auth.module";
import {CustomerModule} from "./customer/customer.module";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        AuthModule,
        CustomerModule,
        appRouting
    ],
    declarations: [
        AppComponent
    ],
    //providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
