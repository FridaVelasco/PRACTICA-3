import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "tareas-module",
    loadChildren: () => import ('./tareas-module/tareas-module.module').then( m => m.TareasModuleModule )
  },
  {
    path: '**',
    redirectTo: `tareas-module`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
