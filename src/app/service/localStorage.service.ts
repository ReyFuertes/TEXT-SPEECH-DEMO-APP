import { Injectable, EventEmitter, Output } from '@angular/core';
import { Speech } from '../models/speech.model';
import { StateService } from './state.service';

@Injectable()
export class LocalStorageService {
  constructor(private stateService: StateService){}

  public getSpeechList(): Speech[] {
    return JSON.parse(localStorage.getItem('speechList'));
  }

  public getLength(): number {
    return JSON.parse(localStorage.getItem('speechList')).length;
  }

  public save(item: Speech): void {
    if(localStorage.getItem('speechList')) {
      let arr = JSON.parse(localStorage.getItem('speechList'));
      arr.push(item);

      localStorage.setItem('speechList', JSON.stringify(arr))
    }
  }

  public update(item: Speech): void {
    if(localStorage.getItem('speechList')) {
      let data = this.getSpeechList();
      let index : number = data.findIndex(i => i.id === item.id);
      data[index] = item;
      localStorage.setItem('speechList', JSON.stringify(data))
      this.stateService.setList(data);
    }
  }

  public delete(item: Speech): void {
    if(localStorage.getItem('speechList')) {
      let data = this.getSpeechList();
      const index: number = data.findIndex(i => i.id === item.id);
      if(index !== -1) {
        data.splice(index, 1);
        this.stateService.setList(data);
        localStorage.setItem('speechList', JSON.stringify(data))
      }      
    }
  }

  public getActionIndex(): number {
    return JSON.parse(localStorage.getItem('btnAction'));
  }

  public setActionIndex(index: any): void {
    localStorage.setItem('btnAction', JSON.stringify(index));
  }


}