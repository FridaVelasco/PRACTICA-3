import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TareaService } from '../../service/tarea-service.service';
import { Tarea } from './../../models/tarea.models';
import { TareaStatus } from '../../enums/tarea-status.enums';

@Component({
  selector: 'tareas-module-tarea-card',
  templateUrl: './tarea-card.component.html',
  styleUrls: ['./tarea-card.component.css']
})
export class TareaCardComponent {
  //inyectando servicios apra utilizar sus metodos
  tareaService: TareaService = inject(TareaService);

  @Input()
  tarea !: Tarea;

  @Input("tareaIndex")
  index: number = -1;

  @Output("onStatusChange") emitter: EventEmitter <TareaStatus>;

  tareaStatus= {
    pendiente: TareaStatus.PENDIENTE,
    retrasado: TareaStatus.RESTRASADO,
    completado: TareaStatus.COMPLETADO
  }
status: any;
TareaStatus: any;

  constructor(){
    this.emitter = new EventEmitter();
  }

  changeStatus(status: TareaStatus){
    if (this.index < 0) {
      return;
    }
    this.tarea.status = status;
    this.tareaService.updateTarea(this.index, this.tarea);
    this.emitter.emit(status);

  }

}
