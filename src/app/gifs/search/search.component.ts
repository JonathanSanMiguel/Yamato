import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  constructor( private servicio: GifsService) {}
  ngOnInit(): void {}

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>

  //Metodo para buscar un Gif
  buscar() {
    const valor = this.txtBuscar.nativeElement.value
    //Valida que no este vacia la variable.
    if(valor.trim().length === 0){
      return
    }
    //Llama al metodo buscarGifs del servicio y
    //le manda el valor que hallamos ingresado.
    this.servicio.buscarGifs(valor)
    this.txtBuscar.nativeElement.value = ''
  }//Buscar
}//SearchComponent