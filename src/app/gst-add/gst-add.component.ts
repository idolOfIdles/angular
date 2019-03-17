import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormArray, FormControl } from '@angular/forms';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private qs: QuestionService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      question: '',
      optionList: this.fb.array([this.newEmptyOption()]),

    });
  }

  get optionList() {
    return this.angForm.get('optionList') as FormArray;
  }

  addQuestion() {
    this.qs.addQuestion(this.angForm.value);
  }

  addOption() {
    const option = this.fb.group({
      description : ""  
    }) 
    this.optionList.push(option);
    console.log(this.angForm.value);
    
  }

  newEmptyOption() {
    return this.fb.group({
      description : ""
    }) 
    
  }



  

}
