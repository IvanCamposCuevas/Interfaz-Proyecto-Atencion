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
  eliminarAtencionPorNumero(infoNumero:Numero){
    if(confirm('¿Estas seguro que quiere eliminar el numero seleccionado?')){
      this.server.deleteAtencion('/api/numero', infoNumero.NumAtencion).subscribe((response: any) =>{
        const i = this.listNumeros.findIndex(x => x.NumAtencion === infoNumero.NumAtencion);
        if(i !== -1){
          this.listNumeros.splice(i,1);
        }
       },
       (error: any) => console.error(error)
       );
    }
  }
}
