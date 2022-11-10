import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifResponse, Gif } from 'src/app/interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private ApiKey: string = 'psjMr58q6QG8CMdMnBnVE5isJp1EneYE'
  private API_URL: string = 'http://api.giphy.com/v1/gifs'
  private _historial: string[] = []
  public results: Gif[] = []

  //Metodo para obtener el historial.
  get historial() {
    return [...this._historial]
  }//get historial

  constructor( private http: HttpClient) {
    //Carga desde el LocalStorage el historial.
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []
    //Carga desde el LocalStorage la ultima busqueda.
    this.results = JSON.parse(localStorage.getItem('results')!) || []
  }//constructor

  buscarGifs( query: string ){
    //Al dato de entrada, le quita los espacios en blanco y lo pasa a minusculas.
    query = query.trim().toLowerCase()
    
    if( !this._historial.includes(query) ){
      //Coloca la ultima busqueda al principio del arreglo.
      this._historial.unshift(query)
      this._historial = this._historial.splice(0,10)
      //Guarda el historial en el LocalStorage.
      localStorage.setItem('historial', JSON.stringify(this._historial))
    }//if

    //Permite construir todos los parametros para el EndPoint.
    const params = new HttpParams().set('api_key', this.ApiKey).set('q', query)
    //Peticion GET para obtener los gif, concatena los parametros.
    //El subscribe se ejecuta cuando tengamos una respuesta del get.
    this.http.get<SearchGifResponse>(`${this.API_URL}/search`, {params})
      .subscribe((resp) => {
        this.results = resp.data
        //Guarda los resultados en el LocalStorage.
        localStorage.setItem('results', JSON.stringify(this.results))
      })//subscribe
  }//buscarGifs
}//GifsService 