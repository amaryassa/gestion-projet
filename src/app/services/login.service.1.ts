import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import {map, switchMap} from 'rxjs/operators';

import { auth } from 'firebase';
import * as firebase from 'firebase';
import { of as observableOf, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afAuth: AngularFireAuth) { }

  uid = this.afAuth.authState.pipe(
    map(authState => {
      if (!authState) {return null; console.log("null") }
      else {return authState.uid; console.log('authState', authState)}
    })
  );
  // isAdmin = observableOf(true);
  // isAdmin: O bservable <boolean> = this.uid.pipe(
  //   switchMap (uid => {
  //     if (!uid) {
  //       return observableOf(false);
  //     } else {
  //       // return this.db.object<boolean>('/admins/'+ uid).valueChanges();
  //       return  firebase.database().ref('/admins/'+ uid).valueChanges();
  //     }
  //   })
  // );


  login() {
    console.log('Redirecting to Google login provider');
    // this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    // this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword
  }
  // login() {
  // return new Promise(
  //   (resolve, reject) => {
  //     this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider()).then(
  //       () => {
  //         console.log('Amar');
  //         resolve();
  //       },
  //       (error) => {
  //         reject(error);
  //       }
  //     );
  //   }
  // );
  logout() {
    this.afAuth.auth.signOut();
  }

  getLoggedInUser() {
    return this.afAuth.authState;
  }
}
