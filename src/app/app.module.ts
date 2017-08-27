import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {LayoutComponent} from "./layout/layout.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {appRouting} from "./app.routing";

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        appRouting
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
