import { Component, OnInit } from "@angular/core";
import { SpeechService } from "src/app/module/speech.service";
import { Router } from "@angular/router";
import { LocalStorageService } from "src/app/service/localStorage.service";

@Component({
  selector: "app-view-speech",
  templateUrl: "./view-speech.component.html",
  styleUrls: ["./view-speech.component.scss"]
})
export class ViewSpeechLayoutComponent implements OnInit {
  public isActive: number = 1;
  public display: boolean = false;
  public showSidebar: boolean = false;

  constructor(
    private router: Router,
    private speechService: SpeechService,
    private localStorageService: LocalStorageService
  ) {
    localStorage.setItem("speechList",
      JSON.stringify(this.speechService.collection())
    );
  }

  ngOnInit(): void {
  }

  public onShow(): void {
    this.showSidebar = !this.showSidebar;
  }

  public onClick(index: number): void {
    this.isActive = index;
    this.localStorageService.setActionIndex(index);

    if (index === 1) {
      this.router.navigateByUrl("view");
    }
    if (index === 2) {
      this.router.navigateByUrl("new");
    }
    if (index === 3) {
      this.router.navigateByUrl("view");
      this.display = true;
    }

  }
}
