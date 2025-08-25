import { CommonModule } from "@angular/common";
import { HomeComponentLayout } from "../landing/components/home/home.component";
import { FooterComponentLayout } from "./components/footer/footer.component";
import { HeaderComponentLayout } from "./components/header/header.component";
import { LandingLayoutComponent } from './components/landing-layout.component';
import { NgModule } from "@angular/core";
import { LandingRoutingModule } from "./landing-routing.module";
import { ContactComponent } from "./components/contact/contact.component";

@NgModule({
  declarations: [
    HeaderComponentLayout,
    FooterComponentLayout,
    HomeComponentLayout,
    ContactComponent,
    LandingLayoutComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
