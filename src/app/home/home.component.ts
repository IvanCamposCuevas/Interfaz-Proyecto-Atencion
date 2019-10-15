import { Component, OnInit } from '@angular/core';
import { RestClientService } from '../rest-client.service'
import {Servicio} from '../clases/Servicio'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public rest: RestClientService) { 
  }
  lstServicios: Servicio[];
  ngOnInit() {
    this.rest.getJson('/api/atencion').subscribe((response: any) =>{
      this.lstServicios = response;
    });
  }
}
