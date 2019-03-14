import { Router } from '@angular/router';
import { User } from './../models/User.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import {UsersService} from '../services/users.service';




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

   users: Observable <User[]>;
   amar: any;

  // users: user[];
  constructor(private usersService: UsersService) {

  }
  ngOnInit() {
    this.users = this.usersService.getUsers();
    console.log('jsk', this.users );
    this.amar = this.usersService.getOneUser('5oRU1sPQ9dSZ9JUlI75JlshpDCe2');
    // console.log(this.amar);


    // this.users = this.db.collection('users').valueChanges();
    // this.db.collection('users').valueChanges().subscribe((user) => {
   //   this.users = user;
   // });
  }


  ngOnDestroy() {
  }
}
