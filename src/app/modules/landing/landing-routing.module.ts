import { RouterModule, Routes } from "@angular/router";
import { HomeComponentLayout } from "./components/home/home.component";
import { LandingLayoutComponent } from './components/landing-layout.component';
import { NgModule } from "@angular/core";
import { ContactComponent } from "./components/contact/contact.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ProcesionalComponent } from './components/repertorios/procesional/procesional.component';
import { OrdinarioComponent } from './components/repertorios/ordinario/ordinario.component';
import { HistoriaComponent } from './components/agrupacion-musical/historia/historia.component';
import { EscudoUniformidadComponent } from './components/agrupacion-musical/escudo-uniformidad/escudo-uniformidad.component';
import { OrganigramaComponent } from './components/agrupacion-musical/organigrama/organigrama.component';
import { SedeSocialComponent } from './components/agrupacion-musical/sede-social/sede-social.component';

const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      { path: '', component: HomeComponentLayout },
      { path: 'contacto', component: ContactComponent },
      { path: 'noticias', component: BlogComponent },
      { path: 'repertorio/procesional', component: ProcesionalComponent },
      { path: 'repertorio/ordinario', component: OrdinarioComponent },
      { path: 'agrupacion/historia', component: HistoriaComponent },
      { path: 'agrupacion/escudo-uniformidad', component: EscudoUniformidadComponent },
      { path: 'agrupacion/organigrama', component: OrganigramaComponent },
      { path: 'agrupacion/sede-social', component: SedeSocialComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule { }
