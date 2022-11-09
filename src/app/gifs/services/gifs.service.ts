import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  constructor() { }

  private _historial: string[] = []

  get historial() {
    return [...this._historial]
  }//historial

  bucarGifs( query: string ){
    query = query.trim().toLowerCase()

    if( !this._historial.includes(query) ){
      this._historial.unshift(query)
      this._historial = this._historial.splice(0,10)
    }//if

    console.log(this._historial)
  }//buscarGifs

}//GifsService 
