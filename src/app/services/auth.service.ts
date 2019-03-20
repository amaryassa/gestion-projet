import { Injectable } from '@angular/core';

import { AngularFireAuth } from  '@angular/fire/auth';
import {UsersService} from './users.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  constructor(private  afAuth:  AngularFireAuth) { }


    // singUP
        createNewUser(email: string, password: string) {
        return new Promise<any>((resolve, reject) => {
            // this.afAuth.auth.signInWithEmailAndPassword(email, password)
            this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(email, password)
                .then(res => {
                    // console.log(res.user.uid);

                    resolve(res);
                }, err => {
                    // console.log(err);
                    reject(err);
                });
        });
    }
  // connexion



  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
          this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
          (res) => {
              // console.log('Amar', res);
            resolve(res);
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
      this.afAuth.auth.signOut();
      // console.log('Déconnexion');
  }


}



