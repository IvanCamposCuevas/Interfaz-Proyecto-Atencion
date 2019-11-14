import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Atencion} from './clases/atencion';
import { throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  constructor(private http: HttpClient) { }

  getJson(url: string){
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  postAtencion(url: string, _atencion:Atencion){
    return this.http.post(url,_atencion,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .pipe(catchError(this.handleError));
  }

  deleteAtencion(url:string, nroAtencion:Number){
    return this.http.delete(url+'?nroAtencion='+nroAtencion).pipe(catchError(this.handleError));
  }

  getAtencionPorRut(url: string, rut:string){
    return this.http.get(url+'?rut='+rut).pipe(catchError(this.handleError));
  }
  
  private handleError(errorResponse:HttpErrorResponse){
    if(errorResponse.error instanceof ErrorEvent){
      console.error('Client Side Error: ', errorResponse);
    }else{
      console.error('Server Side Error: ', errorResponse);
    }

    return throwError(new Error('Hay un error en el servicio, hemos sido notificados y estamos trabajando para solucionarlo, por favor intente mas tarde'));
  }
}
