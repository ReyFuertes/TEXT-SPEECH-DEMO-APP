import { Injectable } from "@angular/core";
import { Speech } from "../models/speech.model";

@Injectable()
export class SpeechService {
  public collection(): Speech[] {
    return [
      {
        id: 1,
        author: "Jake Anderson",
        subject: "Speech 1",
        content:
          "se of Letraset sheets containing Lorem Ipsum passages, and more recently w",
        date: "10/20/2018"
      },
      {
        id: 2,
        author: "Tito Ortis",
        subject: "Speech 2",
        content:
          "xt. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary",
        date: "10/21/2018"
      },
      {
        id: 3,
        author: "John Abbott",
        subject: "Speech 3",
        content:
          'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        date: "10/22/2018"
      },
      {
        id: 4,
        author: "John Doe",
        subject: "Speech 4",
        content:
          "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions",
        date: "10/23/2018"
      }
    ];
  }

  public searchSpeech(searchTerm: string, arr: Speech[]) {
    return new Promise((resolve, reject) => {
      const res = arr.filter(
        item =>
          item.subject.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      )
      resolve(res);
    });
  }

}
