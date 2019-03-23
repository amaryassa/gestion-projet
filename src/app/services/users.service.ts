import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {User} from '../models/User.model';



@Injectable({
  providedIn: 'root'
})
export class UsersService {



  constructor(  private db: AngularFirestore) { }

  getUsers(): Observable<DocumentChangeAction<User[]>[]> {
 // return this.db.collection<User>('users').snapshotChanges();
 return this.db.collection<User[]>('users').snapshotChanges();
 }
 getOneUser(id) {
     return this.db.collection('users').doc(id).get();
 }





  addUser(id: string, nom: string, prenom: string,  email: string) {
    this.db.collection('users').doc(id).set({
      nom: nom,
      prenom: prenom,
      email: email
    });
 }


}
