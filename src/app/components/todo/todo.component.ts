import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from '../../todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input()
  public todo!: ITodo;

  constructor() { }

  ngOnInit(): void {
  }

}
