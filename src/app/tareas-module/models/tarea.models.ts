import { TareaStatus } from "../enums/tarea-status.enums";

export interface Tarea{
  titulo: string,
  descripcion: string,
  status: TareaStatus
}
