import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interfaces/gifs_data.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public resultados: Gif[]=[];
  private urlApi : string = 'https://api.giphy.com/v1/gifs';
  private apiKey : string = 'lUvx5DDAi0SdPQtljP33AtxhvqEhwFyH';
  private _historial: string[] =[];
  constructor(
    private http: HttpClient
  ) {
    //Esto lo hacemos ya que el constructor se ejecuta una vez que se llama al servicio, solo una vez
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    //imagenes
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
   }

  ////////////////////
 get historial(){
  return [...this._historial];
 }
 buscarGif(query : string){
  //lo ponemos todo en minúscula para que si escribimos ABC sea lo mismo que abc
  query = query.trim().toLowerCase();


  if(!this._historial.includes(query)){
    this._historial.unshift(query);
    this._historial = this._historial.splice(0,10);


    //Almacenamos los 10 primeros en el navegador
    localStorage.setItem('historial', JSON.stringify(this._historial));
    //las imágenes

  }

  //Refactorización de la url para que sea más fácil de mantener
  const params = new HttpParams()
  .set('api_key', 'lUvx5DDAi0SdPQtljP33AtxhvqEhwFyH')
  .set('q', query)
  .set('limit', '10');

  this.http.get<SearchGIFResponse>(`${this.urlApi}/search?`, {params})
      .subscribe((resp) =>{
        this.resultados = resp.data;
        //console.log(resp.data);
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });



}
}
