import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './Pages/pacientes/pacientes.component';
import { SidebarComponent } from './Shared/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: SidebarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
