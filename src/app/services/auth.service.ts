import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';

import {AngularFireAuth} from "angularfire2/auth";
import {Observable} from 'rxjs/observable';
import * as firebase from "firebase/app";
import {AngularFirestore,AngularFirestoreDocument} from 'angularfire2/firestore'
import {of} from 'rxjs'
//import {SwitchMap} from 'rxjs/operators';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$:Observable<User>
  user: Observable<firebase.User>;
 
  constructor(private afAuth:AngularFireAuth,private router:Router,private afs:AngularFirestore) { 
   this.user$=this.afAuth.authState
  }
  signup(email: string, password: string) {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }

  login(email: string, password: string) {
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.afAuth
      .auth
      .signOut();
  }


}
