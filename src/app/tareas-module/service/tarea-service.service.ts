import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea.models';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private tareasKey = "tareas";
  private tareas: Tarea[] = [];

  constructor() {
    let lsTareas = localStorage.getItem(this.tareasKey)
    if(lsTareas){
      this.tareas = JSON.parse(lsTareas)
    }
  }

  private saveToLocalStorage(){
    localStorage.setItem(this.tareasKey, JSON.stringify(this.tareas));
  }

  getTareas(): Tarea[]{
    return this.tareas;
  }

  updateTarea(index: number, tarea: Tarea){
    this.tareas[index]= tarea;
    this.saveToLocalStorage();
  }

  agregarTare(tarea: Tarea){
    this.tareas.push(tarea);
    this.saveToLocalStorage();
  }


}
