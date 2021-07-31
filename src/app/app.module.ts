import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

//rutas
import {app_routing} from "./app.routes";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { IndexeditComponent } from './components/indexedit/indexedit.component';
import { EditComponent } from './components/edit/edit.component';
import { IndexformComponent } from './components/indexform/indexform.component';
import { AboutComponent } from './components/about/about.component';
import { AbouteditComponent } from './components/aboutedit/aboutedit.component';
import { AboutformComponent } from './components/aboutform/aboutform.component';
import { DesechablesformComponent } from './components/desechablesform/desechablesform.component';
import { OrganicosformComponent } from './components/organicosform/organicosform.component';
import { SinginComponent } from './components/singin/singin.component';
import { SingupComponent } from './components/singup/singup.component';
import { PuntosComponent } from './components/puntos/puntos.component';
import { PuntosformComponent } from './components/puntosform/puntosform.component';
import { PuntoseditComponent } from './components/puntosedit/puntosedit.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    IndexeditComponent,
    EditComponent,
    IndexformComponent,
    AboutComponent,
    AbouteditComponent,
    AboutformComponent,
    DesechablesformComponent,
    OrganicosformComponent,
    SinginComponent,
    SingupComponent,
    PuntosComponent,
    PuntosformComponent,
    PuntoseditComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
