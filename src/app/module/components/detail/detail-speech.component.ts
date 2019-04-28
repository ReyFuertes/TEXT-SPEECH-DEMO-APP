import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LocalStorageService } from "src/app/service/localStorage.service";
import { MessageService } from "primeng/components/common/messageservice";
import { StateService } from "src/app/service/state.service";

@Component({
  selector: "app-detail-speech",
  templateUrl: "./detail-speech.component.html",
  styleUrls: ["./detail-speech.component.scss"]
})
export class DetailSpeechComponent implements OnInit {
  public form: FormGroup;
  public display: boolean = false;

  constructor(
    private messageService: MessageService,
    private localStorage: LocalStorageService,
    private stateService: StateService,
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService
  ) {
    this.form = this.formBuilder.group({
      id: [""],
      author: ["", Validators.compose([Validators.required])],
      subject: ["", Validators.compose([Validators.required])],
      content: ["", Validators.compose([Validators.required])],
      date: ["", Validators.compose([Validators.required])]
    });

    this.stateService.speechEmitter.subscribe(selectedSpeech => this.form.patchValue(<FormGroup>selectedSpeech));
    
    if (localStorageService.getActionIndex() === 2) 
        this.form.reset();
    else {
      this.stateService.searchEmitter.subscribe(response => {
        if(response[0]) {
          this.form.get('id').patchValue(response[0].id);
          this.form.get('author').patchValue(response[0].author);
          this.form.get('subject').patchValue(response[0].subject);
          this.form.get('content').patchValue(response[0].content);
          this.form.get('date').patchValue(response[0].date);
        }
        
      });
    }
  }

  ngOnInit(): void {
    
  }

  public onSubmit(): void {
    if(this.localStorageService.getActionIndex() === 1) { //update
      this.localStorage.update(this.form.value);
      this.messageService.add({key: 'tc', severity:'success', summary: 'Successfully Updated!'});

    } else {
      this.form.get('id').setValue(this.generateId()); //create
      this.localStorage.save(this.form.value);
  
      this.messageService.add({key: 'tc', severity:'success', summary: 'Successfully Saved!'});
      setTimeout(() => {
        this.form.reset();
      }, 2000);
    }

  }

  public onDelete(value: any): void {
    this.localStorage.delete(value);
    this.form.reset();
    this.messageService.add({
      key: "tc",
      severity: "warn",
      summary: "Successfully Delete!"
    });
  }

  private generateId(): number {
    return Math.floor(Math.random() * 10000 + 1);
  }
}
