import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {}

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>

  buscar() {
    const valor = this.txtBuscar.nativeElement.value
    console.log(valor)
    this.txtBuscar.nativeElement.value = ''
  }
}
