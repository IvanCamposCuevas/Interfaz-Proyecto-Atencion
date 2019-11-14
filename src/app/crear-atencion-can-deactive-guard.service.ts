import {CanDeactivate} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class CrearAtencionCanDeactiveGuardService implements CanDeactivate<HomeComponent>{
    canDeactivate(component: HomeComponent): boolean{
        if(component.CrearAtencionForm.dirty && !component.formularioEnviado){
            return confirm('¿Estas seguro que quieres descartar los cambios?');
        }

        return true;
    }
}