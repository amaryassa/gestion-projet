import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  //singUP
  createNewUser(email: string, password: string) {
  return new Promise(
    (resolve, reject) => {
      firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    }
  );
  }

  //connexion

  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOutUser() {
    firebase.auth().signOut();
  }


}
