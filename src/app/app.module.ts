import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutoriaComponent } from './components/add-tutoria/add-tutoria.component';
import { ListTutoriasComponent } from './components/list-tutorias/list-tutorias.component';
import { AddLocationComponent } from './components/add-location/add-location.component';
import { ListLocationsComponent } from './components/list-locations/list-locations.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddTutoriaComponent,
    ListTutoriasComponent,
    AddLocationComponent,
    ListLocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
