import { RouterModule, Routes } from "@angular/router";
import {Component} from "@angular/core";

import { IndexComponent } from "./components/index/index.component";
import { IndexeditComponent } from "./components/indexedit/indexedit.component";
import { EditComponent } from "./components/edit/edit.component";
import { IndexformComponent } from "./components/indexform/indexform.component";
import { AboutComponent } from "./components/about/about.component";
import { AbouteditComponent } from "./components/aboutedit/aboutedit.component";
import { DesechablesformComponent } from "./components/desechablesform/desechablesform.component";
import { OrganicosformComponent } from "./components/organicosform/organicosform.component";
import { SinginComponent } from "./components/singin/singin.component";
import { SingupComponent } from "./components/singup/singup.component";
import { PuntosComponent } from "./components/puntos/puntos.component";
import { PuntosformComponent } from "./components/puntosform/puntosform.component";
import { PuntoseditComponent } from "./components/puntosedit/puntosedit.component";


const app_routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'indexedit', component: IndexeditComponent},
  {path: 'edit', component: EditComponent},
  {path: 'indexform', component: IndexformComponent},
  {path: 'desechablesform', component: DesechablesformComponent},
  {path: 'organicosform', component: OrganicosformComponent},
  {path: 'about', component: AboutComponent},
  {path: 'aboutedit', component: AbouteditComponent},
  {path: 'singin', component: SinginComponent},
  {path: 'singup', component: SingupComponent},
  {path: 'puntos', component: PuntosComponent},
  {path: 'puntosform', component: PuntosformComponent},
  {path: 'puntosedit', component: PuntoseditComponent},
  {path: 'index', pathMatch: 'full', redirectTo: 'index'}
];

export const  app_routing = RouterModule.forRoot(app_routes);