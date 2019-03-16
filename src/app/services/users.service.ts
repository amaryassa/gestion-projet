import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {User} from '../models/User.model';
import {AngularFireList} from '@angular/fire/database';
import {map} from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {



  constructor(  private db: AngularFirestore) { }
  getUsers() {
    return this.db.collection('users').snapshotChanges().subscribe(actionArray => {
      actionArray.map(item => {
     return {
     id: item.payload.doc.id,
     ...item.payload.doc.data()
     } as User;
     });
    });
  }
 /* getUsers() {
    // return this.db.collection<User>('users').snapshotChanges();
    return this.db.collection('users').snapshotChanges();
  }*/
  // getUsers(): Observable<User[]> {
  //   // return this.db.collection<User>('users').valueChanges();
  // }

  addUser(id: string, nom: string, prenom: string,  email: string) {
    this.db.collection('users').doc(id).set({
      nom: nom,
      prenom: prenom,
      email: email
    });
 }


}
