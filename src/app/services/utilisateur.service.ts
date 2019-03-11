import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { User } from './../models/User.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
    users: User[] = [];
    usersSubject = new Subject<User[]>();

  constructor() { }
    emitUsers() {
        this.usersSubject.next(this.users);
    }
    getUsers() {
      firebase.database().ref('/users')
          .on('value', data => {
              console.log('data.val' , data.val());

          });
        firebase.database().ref('/books')
            .on('value', data => {
                console.log('data.val' , data.val());
            });


        // ref.set(list);

    }

  getSingleUser(id: string) {
    return new Promise(
        (resolve, reject) => {
          firebase.database().ref('/users/'+id).once('value').then(
              (data) => {
                  // console.log(data.val());
                resolve(data.val());
              },
              (error) => {
                reject(error);
              }
          );
        }
    );
  }

}
