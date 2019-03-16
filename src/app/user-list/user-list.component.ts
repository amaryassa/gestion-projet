import { Router } from '@angular/router';
import { User } from './../models/User.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import {UsersService} from '../services/users.service';

import {map} from 'rxjs/internal/operators';




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  // users: User[];
    users: User[];

  constructor(private usersService: UsersService, private db: AngularFirestore) {
      // console.log(this.db.collection('users').doc('5oRU1sPQ9dSZ9JUlI75JlshpDCe2').ref);

  }
  ngOnInit() {
      console.log(this.usersService.getUsers());
    this.usersService.getUsers().subscribe(result => { });

     /* this.usersService.getUsers().subscribe(actionArray => {
         // console.log(actionArray);
          this.users = actionArray.map(item => {
              return {
                  id: item.payload.doc.id,
                  ...item.payload.doc.data()
              } as User;
          });
      });*/




  }


  ngOnDestroy() {
  }
}
