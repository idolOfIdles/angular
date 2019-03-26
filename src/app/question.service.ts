import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Question from './Question';
import { Observable } from 'rxjs';

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

  list(){
      return this.http.get<Question[]>(`${this.uri}/all`);
  }

}
