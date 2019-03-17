import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  uri = 'http://localhost:8083/question';

  constructor(private http: HttpClient) { }

  addQuestion(questionDetail) {
    
    this.http.post(`${this.uri}/add`, questionDetail)
        .subscribe(res => console.log('Done'));
  }
}
