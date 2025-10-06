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
import { HistoriaComponent } from './components/agrupacion-musical/historia/historia.component';
import { EscudoUniformidadComponent } from './components/agrupacion-musical/escudo-uniformidad/escudo-uniformidad.component';
import { OrganigramaComponent } from './components/agrupacion-musical/organigrama/organigrama.component';
import { SedeSocialComponent } from './components/agrupacion-musical/sede-social/sede-social.component';


@NgModule({
  declarations: [
    HeaderComponentLayout,
    FooterComponentLayout,
    HomeComponentLayout,
    ContactComponent,
    BlogComponent,
    LandingLayoutComponent,
    OrdinarioComponent,
    ProcesionalComponent,
    HistoriaComponent,
    EscudoUniformidadComponent,
    OrganigramaComponent,
    SedeSocialComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
