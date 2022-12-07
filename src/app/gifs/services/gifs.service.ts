import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interfaces/gifs_data.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public resultados: Gif[]=[];
  private apiKey : string = 'lUvx5DDAi0SdPQtljP33AtxhvqEhwFyH';
  private _historial: string[] =[];
  constructor(
    private http: HttpClient
  ) { }
 get historial(){
  return [...this._historial];
 }
 buscarGif(query : string){
  //lo ponemos todo en minúscula para que si escribimos ABC sea lo mismo que abc
  query = query.trim().toLowerCase();


  if(!this._historial.includes(query)){
    this._historial.unshift(query);
    this._historial = this._historial.splice(0,10);
  }

  this.http.get<SearchGIFResponse>(`https://api.giphy.com/v1/gifs/search?api_key=lUvx5DDAi0SdPQtljP33AtxhvqEhwFyH&q=${query}&limit=10`)
      .subscribe((resp) =>{
        this.resultados = resp.data;
        console.log(resp.data);
      });



}
}
