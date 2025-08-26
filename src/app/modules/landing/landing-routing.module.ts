import { RouterModule, Routes } from "@angular/router";
import { HomeComponentLayout } from "./components/home/home.component";
import { LandingLayoutComponent } from './components/landing-layout.component';
import { NgModule } from "@angular/core";
import { ContactComponent } from "./components/contact/contact.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ProcesionalComponent } from './components/repertorios/procesional/procesional.component';
import { OrdinarioComponent } from './components/repertorios/ordinario/ordinario.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule { }
