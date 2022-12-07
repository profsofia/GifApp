import { Component} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results-gif',
  templateUrl: './results-gif.component.html'
})
export class ResultsGifComponent {
  get resultados(){
    return this.gifService.resultados;
  }



  constructor(private gifService: GifsService) { }



}
