import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLocationComponent } from './components/add-location/add-location.component';
import { AddTutoriaComponent } from './components/add-tutoria/add-tutoria.component';
import { ListLocationsComponent } from './components/list-locations/list-locations.component';
import { ListTutoriasComponent } from './components/list-tutorias/list-tutorias.component';

const routes: Routes = [
  { path:'',redirectTo:'tutorias',pathMatch:'full' },
  { path : 'tutorias', component: ListTutoriasComponent },
  { path: 'add-tutoria', component: AddTutoriaComponent },
  { path: 'locations', component: ListLocationsComponent},
  { path: 'add-location', component: AddLocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
