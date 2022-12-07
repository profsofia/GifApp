import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-loock-gif',
  templateUrl: './loock-gif.component.html'
})
export class LoockGifComponent {
  /**ViewChild: entre paréntesis ponemos la referencia del html luego el nombre que le queremos dar a esa referencia
   * le pusimos el signo ! que significa que ese elemento no va a ser nunca nulo
   * el tipo de elemento que es ElementRef y ese ElementRef es de tipo HTMLInputElement que es nativo de TypeScript
   */
 @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  constructor(
    private gifsService : GifsService
  ) { }

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0){
      return;
    }
    this.gifsService.buscarGif(valor);
    this.txtBuscar.nativeElement.value='';
  }
}
