import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TareasLayoutComponent } from './../../layout/tareas-layout/tareas-layout.component';
import { TareaStatus } from '../../enums/tarea-status.enums';
import { Tarea } from '../../models/tarea.models';
import { TareaService } from './../../service/tarea-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tareas-module-tarea-formulario',
  templateUrl: './tarea-formulario.component.html',
  styleUrls: ['./tarea-formulario.component.css']
})
export class TareaFormularioComponent {
  //declaracion de servicios
  private fb: FormBuilder = inject(FormBuilder);
  private tareaService: TareaService = inject(TareaService);
  private router: Router = inject(Router);

  TareaForm: FormGroup = this.fb.group({
    //campo: valor inicia, validadores sincronos, validadores asincronos
    titulo: ['', [Validators.required, Validators.minLength(5)]],
    descripcion: ['',[Validators.required, Validators.minLength(5)]],

  });

  isFieldValid(field: string): boolean | null{
    return this.TareaForm.controls[field].errors && this.TareaForm.controls[field].touched;

  }

  OnFormSubmit(){
    //condicional
    if ( !this.TareaForm.valid ) {
      this.TareaForm.markAllAsTouched();
      // console.info('El Formulario Es NO VALIDO');
      return;
    }
    const newTarea: Tarea = {
          status:TareaStatus.PENDIENTE,
          titulo: this.TareaForm.value['titulo'],
          descripcion: this.TareaForm.value['descripcion'],
    }
    console.log("Valores ingresados", newTarea);
    //registrar la tarea
    this.tareaService.agregarTare(newTarea);

    //redirigir a mi-lista
    this.router.navigate(['tareas', "mi-lista"]);
    //this.router.navigateByUrl('/tareas/mi-lista');
  }
}
