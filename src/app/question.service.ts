import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  uri = 'http://localhost:8083/business';

  constructor(private http: HttpClient) { }

  addQuestion(question, optionDescription) {
    const obj = {
      question: question,
      optionList: optionDescription
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
}
