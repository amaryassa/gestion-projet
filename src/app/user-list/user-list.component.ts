import { Router } from '@angular/router';
import { User } from './../models/User.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore';
import {UsersService} from '../services/users.service';

import {map} from 'rxjs/internal/operators';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  // users: User[];
    users: User[];
    // users: Observable<DocumentChangeAction<User[]>[]>;

  constructor(private usersService: UsersService,
              private db: AngularFirestore,
              private toastr: ToastrService) {
  }
  ngOnInit() {
      // console.log(this.usersService.getUsers());
      // this.users = this.usersService.getUsers();
      this.usersService.getUsers().subscribe(actionArray => {
         // console.log(actionArray);
          this.users = actionArray.map(item => {
              return {
                  id: item.payload.doc.id,
                  ...item.payload.doc.data()
              } as User;
          });
      });





  }
onGetOneUser(id) {
  this.usersService.getOneUser(id).subscribe(item => {
    this.toastr.info(item.data().email, item.data().prenom + ' ' +item.data().nom);
    // success(item.data().email, item.data().prenom + ' ' +item.data().nom);
  });
}

  ngOnDestroy() {
  }
}
