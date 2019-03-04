import Option from './Option';

export default class Question {
  id : number;
  question : string;
  createDate : Date;
  updateDate : Date;
  optionList : Array<Option>;
  }