import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGifResponse, Gif } from 'src/app/interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private ApiKey: string = 'psjMr58q6QG8CMdMnBnVE5isJp1EneYE'
  private _historial: string[] = []
  public results: Gif[] = []

  get historial() {
    return [...this._historial]
  }//historial

  constructor( private http: HttpClient) { }

  bucarGifs( query: string ){
    query = query.trim().toLowerCase()

    if( !this._historial.includes(query) ){
      this._historial.unshift(query)
      this._historial = this._historial.splice(0,10)
    }//if

    //el subscribe se ejecuta cuando tengamos una respuesta del get
    this.http.get<SearchGifResponse>(`http://api.giphy.com/v1/gifs/search?api_key=psjMr58q6QG8CMdMnBnVE5isJp1EneYE&q=${query}`)
      .subscribe((resp) => {
        this.results = resp.data
      })
  }//buscarGifs

}//GifsService 