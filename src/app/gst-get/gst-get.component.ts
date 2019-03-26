import { Component, OnInit } from '@angular/core';
import { QuestionService} from '../question.service'
import Question from '../Question';
@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {

  private qsLsit: Question[] ;
  constructor(private qs: QuestionService) { }

  ngOnInit() {
    this.list();
  }

  list(){
    this.qs.list().subscribe(res =>{
      this.qsLsit = <Question[]>res;
      console.log(this.qsLsit);
    } );
  }



}
