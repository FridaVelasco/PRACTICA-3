import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  tareamenuItems: MenuItem[] = [];
  paisesmenuItems: MenuItem[] = [];

  constructor(){
    this.tareamenuItems.push({route: '/tareas-module/mi-lista', text:'Mis tareas'});
    this.tareamenuItems.push({route: '/tareas-module/nueva-tarea', text:'Agregar tareas'});
  }
}
