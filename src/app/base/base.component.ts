import { Component } from '@angular/core';
import {ToDoItem} from './ToDoItem';
import {ITEMS} from './mock-todo-items';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  result:any
  items = ITEMS
  toDoItem:ToDoItem = {
    id: 11,
    name: 'Marry',
    isComplite: true
  }




  showResult(text:any){
    this.result = text;
  }
  plus(left:any, right:any){
    this.result = Number(left) + Number(right);
  }
  minus(left:any, right:any){
    this.result = Number(left) - Number(right);
  }
  divi(left:any, right:any){
    this.result = Number(left) / Number(right);
  }
  multi(left:any, right:any){
    this.result = Number(left) * Number(right);
  }
}
