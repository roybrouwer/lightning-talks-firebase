import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email = '';
  public password = '';

  constructor(
    private auth: AngularFireAuth,
  ) { }

  ngOnInit(): void {
  }

  public login(): void {
    this.auth.signInWithEmailAndPassword(this.email, this.password).catch(console.log);
  }

}
