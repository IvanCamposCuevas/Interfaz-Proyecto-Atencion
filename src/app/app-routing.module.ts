import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {NumeroComponent} from './numero/numero.component';
import {AtencionComponent} from './atencion/atencion.component';
import { CrearAtencionCanDeactiveGuardService } from './crear-atencion-can-deactive-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch:'full'},
  {path: 'Home', component: HomeComponent, canDeactivate: [CrearAtencionCanDeactiveGuardService]},
  {path: 'AtencionCliente', component: AtencionComponent},
  {path: 'VerNumero', component: NumeroComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports:[RouterModule]
})
export class AppRoutingModule { }
