import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild
} from "@angular/core";
import { SpeechService } from "src/app/module/speech.service";
import { StateService } from "src/app/service/state.service";

@Component({
  selector: "app-search-speech",
  templateUrl: "./search-speech.component.html",
  styleUrls: ["./search-speech.component.scss"]
})
export class SearchSpeechComponent implements OnInit {
  public searchTerm: string = "";
  @ViewChild("searchInput") searchInput: any;

  @Output()
  public searchResultEmitter = new EventEmitter<any>();

  constructor(
    private speechService: SpeechService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.searchInput.nativeElement.value = "";
  }

  public onSearch(searchTerm: any): void {
    this.speechService
      .searchSpeech(
        searchTerm.target.value,
        JSON.parse(localStorage.getItem("speechList"))
      )
      .then(response => this.stateService.setSearch(response));
  }
}
