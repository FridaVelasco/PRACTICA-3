import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiListaPageComponent } from './pages/mi-lista-page/mi-lista-page.component';
import { FormularioPageComponent } from './pages/formulario-page/formulario-page.component';
import { TareasLayoutComponent } from './layout/tareas-layout/tareas-layout.component';

const routes: Routes = [
  {
    path: '',
    component:TareasLayoutComponent,
    children: [
      {
        path: `mi-lista`,
        //pathMatch: 'full',
        component: MiListaPageComponent
      },
      {
        path: "nueva-tarea",
        component: FormularioPageComponent
      },
      {
        path:'**',
        redirectTo: 'mi-lista'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasModuleRoutingModule { }
