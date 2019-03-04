import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private qs: QuestionService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      question: ['', Validators.required ],
      optionDescription: ['', Validators.required ]
    });
  }

  addQuestion(question, optionDescription) {
    this.qs.addQuestion(question, optionDescription);
  }

  ngOnInit() {
  }

}
