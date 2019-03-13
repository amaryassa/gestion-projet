import { Router } from '@angular/router';
import { User } from './../models/User.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

   // users: Observable <User[]>;
  users : any[];
  // items:  any[];
  // items: Observable<any[]>;
  constructor(private db: AngularFirestore) {

  }
  ngOnInit() {
    // this.items = this.db.collection('users').valueChanges();
   this.db.collection('users').valueChanges().subscribe((user) => {
     console.log(user);
     this.users = user;
   });
    console.log('db.collection(users)', this.db.collection('users'));
    console.log('this.items : ',this.users );
  }


  ngOnDestroy() {
  }
}
