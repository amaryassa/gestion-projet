import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {User} from '../models/User.model';
import {AngularFireList} from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(  private db: AngularFirestore) { }
  // getUsers(): Observable<User[]> {
  getUsers(): Observable<User[]> {
    // this.db.collection('users').valueChanges().subscribe((user) => {
    //   this.users = user;
    // });
    return this.db.collection('users').valueChanges();
  }

  addUser(id: string, nom: string, prenom: string,  email: string) {
    this.db.collection('users').doc(id).set({
      nom: nom,
      prenom: prenom,
      email: email
    });
 }


  getOneUser(id: string):  Observable<User> {
    const noteRef: AngularFireList = this.db.doc('users/5oRU1sPQ9dSZ9JUlI75JlshpDCe2');
    this.db.collection('users')
        .where('nom', '==', 'yassa')
        .limit(10)
        .get()
        .then(function(results) {
          results.forEach(function(doc) {
            console.log('message', doc.data());
          });
        });
      // const docRef = this.db.collection('users').valueChanges().doc(id);
      // docRef.get().then( (doc) => {
      //   console.log(doc.data());
      //   return doc.data();
      // });
      }
}
