import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ITodo } from './todo.model';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public todos$ = this.firestore.collection<ITodo>('todo').valueChanges();

  public authState$ = this.auth.authState;

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
  ) { }

}
