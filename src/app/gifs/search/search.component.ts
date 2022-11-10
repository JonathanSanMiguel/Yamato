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

  buscar() {
    const valor = this.txtBuscar.nativeElement.value
    if(valor.trim().length === 0){
      return
    }
    this.servicio.bucarGifs(valor)
    this.txtBuscar.nativeElement.value = ''
  }
}