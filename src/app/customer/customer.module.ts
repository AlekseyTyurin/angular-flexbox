import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CustomerComponent} from "./customer.component";
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CustomerComponent,
        FooterComponent
    ]
})
export class CustomerModule {
}
