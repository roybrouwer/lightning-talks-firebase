import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ITodo } from '../../todo.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public title = '';

  constructor(
    private firestore: AngularFirestore,
  ) { }

  ngOnInit(): void {
  }

  public submit(): void {
    const todo: ITodo = {
      title: this.title,
      checked: false,
    }
    this.firestore.collection<ITodo>('todo').add(todo);
    this.title = '';
  }

}
