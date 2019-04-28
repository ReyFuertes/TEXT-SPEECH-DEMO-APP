import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewSpeechComponent } from "./components/new/new-speech.component";
import { DetailSpeechComponent } from "./components/detail/detail-speech.component";
import { SpeechService } from "./speech.service";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/components/common/messageservice";
import {DialogModule} from 'primeng/dialog';

export const routes: Routes = [
  { path: "", redirectTo: "view", pathMatch: "full" },
  {
    path: "view",
    component: DetailSpeechComponent
  },
  {
    path: "new",
    component: DetailSpeechComponent
  }
];

@NgModule({
  declarations: [NewSpeechComponent, DetailSpeechComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    RouterModule.forChild(routes),
    SharedModule,
    DialogModule
  ],
  exports: [NewSpeechComponent, DetailSpeechComponent],
  providers: [SpeechService, MessageService]
})
export class SpeechModule {}
