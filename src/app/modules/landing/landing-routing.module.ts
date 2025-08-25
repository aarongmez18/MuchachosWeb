import { RouterModule, Routes } from "@angular/router";
import { HomeComponentLayout } from "./components/home/home.component";
import { LandingLayoutComponent } from './components/landing-layout.component';
import { NgModule } from "@angular/core";
import { ContactComponent } from "./components/contact/contact.component";

const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      { path: '', component: HomeComponentLayout },
      { path: 'contacto', component: ContactComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule { }
