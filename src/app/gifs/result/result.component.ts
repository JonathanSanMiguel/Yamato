import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  constructor( private servicio: GifsService) { }

  //Llama al metodo del servicio para mostrar los resultados de busqueda
  get resultados(){
    return this.servicio.results
  }//get resultados

}//ResultComponent
