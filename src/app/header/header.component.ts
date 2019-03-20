import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from '../models/User.model';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    isAuth: boolean;
    currentUser: User;
  constructor(
                private authService: AuthService,
                private afAuth:  AngularFireAuth,
                private usersService: UsersService
            ) { }

  ngOnInit() {
      this.afAuth.auth.onAuthStateChanged(
          (user) => {
                if (user) {
                    this.usersService.getOneUser(user.uid)
                        .subscribe(item => {
                          this.currentUser  = Object.assign({id: user.uid},  item.data());
                    });
                    this.isAuth = true;
                } else {
                    this.isAuth = false;
                }
          }
      );
  }
  signOut() {
    this.authService.signOutUser();
  }
}
