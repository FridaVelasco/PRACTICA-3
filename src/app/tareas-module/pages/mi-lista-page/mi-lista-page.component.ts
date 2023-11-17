import { Component, OnInit, inject } from '@angular/core';
import { Tarea } from '../../models/tarea.models';
import { TareaService } from '../../service/tarea-service.service';

@Component({
  templateUrl: './mi-lista-page.component.html',
  styleUrls: ['./mi-lista-page.component.css']
})
export class MiListaPageComponent implements OnInit {
  tareas: Tarea[] = [];

  //Injectar servicio por método de angular para v > 14
  private tareaService: TareaService = inject(TareaService);

  //Injectar servicio por constructor para toda version de angular
  constructor(private tareaServiceCons: TareaService){}

  ngOnInit(): void{
    this.obtenerTareas();
  }
  obtenerTareas(){
    this.tareas = this.tareaService.getTareas();

  }

  catchOnStatusChange(){
    this.obtenerTareas();

  }

}
