import { Component, OnInit } from '@angular/core';
import { Resultado } from '../clases/resultado';

@Component({
  selector: 'app-atencion',
  templateUrl: './atencion.component.html',
  styleUrls: ['./atencion.component.css']
})
export class AtencionComponent implements OnInit {

constructor() { }
private numeroAtencion: Resultado= {
  NroAtencion : null,
  NroModulo : null,
  TiempoEspera : null
};

  ngOnInit() {
    this.numeroAtencion.NroAtencion = history.state.data.nro_atencion;
    this.numeroAtencion.NroModulo = history.state.data.nro_modulo;
    this.numeroAtencion.TiempoEspera = history.state.data.tiempo_espera;
  }

}
