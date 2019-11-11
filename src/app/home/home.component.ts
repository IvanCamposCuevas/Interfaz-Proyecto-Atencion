import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { RestClientService } from '../rest-client.service'
import {Servicio} from '../clases/Servicio'
import { Atencion } from '../clases/atencion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // atributo can-deactive-guard
  @ViewChild('atencionForm', {static:false}) public CrearAtencionForm: NgForm;

  @ViewChild('vistaComentario', {static:false}) private VistaComentario: ElementRef;
  @ViewChild('comentario', {static:false, read:ElementRef}) private Comentario: ElementRef;

  private esHiddenTxtBox:boolean = true;
  private esRequiredTxtBox:boolean = false;

  atencion: Atencion = {
    Nombre: null,
    Rut: null,
    TipoServicio: -1,
    EsCliente: null,
    Comentario: null
  }
  constructor(private rest: RestClientService, private router:Router) { 
  }
  lstServicios: Servicio[];
  ngOnInit() {
    this.rest.getJson('/api/atencion').subscribe((response: any) =>{
      this.lstServicios = response;
    });
  }

  saveAtencion() : void{
    var stringSplit = this.atencion.TipoServicio.toString().split("|",2);
    if(this.atencion.Comentario == "" || this.atencion.Comentario == null && stringSplit[1] == "1"){
      alert("Ingrese un comentario");
    }else{
      this.atencion.TipoServicio = <number><unknown>stringSplit[0];
      this.rest.postAtencion('/api/atencion', this.atencion).subscribe(
      (response: any) => {
        this.router.navigate(['/AtencionCliente'], {state: {data: response}});
      },
        (error: any) => console.error(error)
      );
    }
  }
   solicitarComentario(event){
    var string = event.target.value;
    var stringSplit = string.split("|",2);
    if(stringSplit[1]==="1"){//stringSplit[1] == valor de comentario
      this.VistaComentario.nativeElement.hidden = !this.esHiddenTxtBox;
      this.Comentario.nativeElement.required = !this.esRequiredTxtBox;
    }else{
      this.atencion.Comentario = null;
      this.VistaComentario.nativeElement.hidden = this.esHiddenTxtBox;
      this.Comentario.nativeElement.required = this.esRequiredTxtBox;
    }
  } 
}
