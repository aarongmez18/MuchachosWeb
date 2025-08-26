import { CommonModule } from "@angular/common";
import { HomeComponentLayout } from "../landing/components/home/home.component";
import { FooterComponentLayout } from "./components/footer/footer.component";
import { HeaderComponentLayout } from "./components/header/header.component";
import { LandingLayoutComponent } from './components/landing-layout.component';
import { NgModule } from "@angular/core";
import { LandingRoutingModule } from "./landing-routing.module";
import { ContactComponent } from "./components/contact/contact.component";
import { BlogComponent } from "./components/blog/blog.component";
import { OrdinarioComponent } from "./components/repertorios/ordinario/ordinario.component";
import { ProcesionalComponent } from "./components/repertorios/procesional/procesional.component";

@NgModule({
  declarations: [
    HeaderComponentLayout,
    FooterComponentLayout,
    HomeComponentLayout,
    ContactComponent,
    BlogComponent,
    LandingLayoutComponent,
    OrdinarioComponent,
    ProcesionalComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
