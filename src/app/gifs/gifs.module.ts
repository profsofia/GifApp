import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifpageComponent } from './gifpage/gifpage.component';
import { LoockGifComponent } from './loock-gif/loock-gif.component';
import { ResultsGifComponent } from './results-gif/results-gif.component';



@NgModule({
  declarations: [
    GifpageComponent,
    LoockGifComponent,
    ResultsGifComponent
  ],
  exports:[
    GifpageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
