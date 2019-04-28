import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Speech } from "src/app/models/speech.model";
import { LocalStorageService } from "src/app/service/localStorage.service";
import { StateService } from "src/app/service/state.service";

@Component({
  selector: "app-list-speech",
  templateUrl: "./list-speech.component.html",
  styleUrls: ["./list-speech.component.scss"]
})
export class ListSpeechComponent implements OnInit {
  public isActive: number = 0;
  public speechList: Speech[];
  public actionIndex: number;
  public isSearch: boolean = false;
  
  @Input() 
  public display: boolean = false;

  @Input()
  public searchList: any;

  @Output()
  public selectedSpeechEmitter = new EventEmitter<Speech>();

  constructor(
    private stateService: StateService,
    private localStorageService: LocalStorageService
  ) {
    this.speechList = this.localStorageService.getSpeechList();
    this.stateService.getListEmitter.subscribe(response => this.speechList = response);
  }

  ngOnInit(): void {
    this.onClick(this.speechList[0]);
    
    this.stateService.actionEmitter.subscribe(response => this.actionIndex = response);
    this.stateService.searchEmitter.subscribe(response => {
      if(response[0]) this.isActive = response[0].id
    });
  }

  public onClick(speech: Speech): void {
    this.isActive = speech.id;
    this.stateService.setSpeech(speech);
  }
}
