import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  constructor(public  afAuth:  AngularFireAuth) { }


    // singUP
        createNewUser(email: string, password: string , nom: string , prenom: string){
        return new Promise<any>((resolve, reject) => {
            // this.afAuth.auth.signInWithEmailAndPassword(email, password)
            this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password)
                .then(res => {
                    console.log(res);
                    // this.addInformationsUser(res.user.uid, email, nom, prenom);
                    resolve(res);
                }, err => {
                    console.log(err);
                    reject(err);
                });
        });
    }










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



