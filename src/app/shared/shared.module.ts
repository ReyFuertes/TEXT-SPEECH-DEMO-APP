import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSpeechComponent } from './list-speech/list-speech.component';
import { SearchSpeechComponent } from './search/search-speech.component';

@NgModule({
  declarations: [ ListSpeechComponent, SearchSpeechComponent],
  imports: [ CommonModule ],
  exports: [ListSpeechComponent, SearchSpeechComponent],
  providers: [],
})
export class SharedModule {}