import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  constructor() { }

    addInformationsUser(userId ,  email: string , nom: string , prenom: string) {
    firebase.database().ref('users').push({
        nom: nom,
        email: email,
        prenom: prenom
    });
}

  // singUP

    createNewUser(email: string, password: string , nom: string , prenom: string){
        return new Promise<any>((resolve, reject) => {
            firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
                .then(res => {
                    this.addInformationsUser(res.user.uid, email, nom, prenom);
                    resolve(res);
                }, err => {
                    console.log(err);
                    reject(err);
                });
        });
    }

/*
  createNewUser(email: string, password: string , nom: string , prenom: string) {
  return new Promise(
    (resolve, reject) => {
      firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
          .then(
              (data) => {
                  firebase.database().ref('/users/' + data.user.uid).set({
                      nom: nom,
                      prenom: prenom,
                      email: data.user.email,
                      uid: data.user.uid
                  });
              },
              (error) => {
                  reject(error);
              }
              )
          .then(
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
*/

  // connexion

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


  // déconnexion

  signOutUser() {
    firebase.auth().signOut();
  }


}



