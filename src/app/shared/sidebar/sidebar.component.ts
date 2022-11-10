import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private servicio: GifsService) { }
  ngOnInit(): void {}

  //Traer el historial desde el servicio
  get historial(){
    return this.servicio.historial
  }//get historial

  //Habilita la seleccion desde el historial
  buscar( termino: string ) {
    this.servicio.buscarGifs(termino)
  }//buscar

}
