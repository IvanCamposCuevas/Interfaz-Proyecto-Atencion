import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import {RestClientService} from '../rest-client.service';
import {Numero} from '../clases/numero';

@Component({
  selector: 'app-numero',
  templateUrl: './numero.component.html',
  styleUrls: ['./numero.component.css']
})
export class NumeroComponent {

  constructor(private server: RestClientService) { }

  listNumeros: Numero[];

  buscarAtencionPorRut(numForm: NgForm){
    this.server.getAtencionPorRut('/api/numero', numForm.value.rut).subscribe((response: any) =>{
      this.listNumeros = response;
     },
     (error: any) => console.error(error)
    );
  }
  eliminarAtencionPorNumero(numeroAtencion:Numero){
    this.server.deleteAtencion('/api/numero', numeroAtencion.NumAtencion).subscribe((response: any) =>{
      console.log(response);
     },
     (error: any) => console.error(error)
     );
  }
}
