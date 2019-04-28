import { Injectable, EventEmitter, Output } from '@angular/core';
import { Speech } from '../models/speech.model';

@Injectable()
export class StateService {
  @Output() public speechEmitter = new EventEmitter<Speech>();
  @Output() public actionEmitter = new EventEmitter<number>();
  @Output() public searchEmitter = new EventEmitter<Speech>();
  @Output() public getListEmitter = new EventEmitter<Speech[]>();

  public setSpeech(selection: Speech): void {
    this.speechEmitter.emit(selection);
  }

  public setSearch(searchedItem: Speech): void {
    this.searchEmitter.emit(searchedItem)
  }

  public setList(data: Speech[]): void {
    this.getListEmitter.emit(data);
  }

}