import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ViewSpeechLayoutComponent } from './page/view-speech/view-speech.component';
import { SharedModule } from './shared/shared.module';
import { LocalStorageService } from './service/localStorage.service';
import { SpeechService } from './module/speech.service';
import {DialogModule} from 'primeng/dialog';
import { StateService } from './service/state.service';

export const routes: Routes = [
  {
    path: "",
    component: ViewSpeechLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: "./module/speech.module#SpeechModule"
      },
    ]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ViewSpeechLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),

    SharedModule,
    DialogModule
  ],
  providers: [StateService, LocalStorageService, SpeechService],
  bootstrap: [AppComponent]
})
export class AppModule { }
