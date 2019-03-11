import {Component, OnDestroy, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import { User } from './../models/User.model';
import {UtilisateurService} from '../services/utilisateur.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {getTypeOf} from '@angular/core/testing/src/lang_utils';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit , OnDestroy{

  // un utilisateur
  /*
   utilisateur: User;
  constructor(private utilisateurService: UtilisateurService) { }


 ngOnInit() {
    this.utilisateur = new User('' , '', '') ;
    firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            this.utilisateurService.getSingleUser(user.uid)
                .then(
                    (user: User) => {
                      this.utilisateur = user;
                      console.log('Utilisateur: ',this.utilisateur);
                    }
                );

          } else {
            // this.isAuth = false;
          }
        }
    );

  }*/
  users: User[];
  // utilisateur: User[]= [];
  UsersSubscription: Subscription;
  constructor(private utilisateurService: UtilisateurService, private router: Router) { }

  ngOnInit() {
    this.UsersSubscription = this.utilisateurService.usersSubject.subscribe(
        // récupérer un array de type book
        // mettre à jour l'array local depuis le service
        (util: User[]) => {
          let mydata = util;
          // console.log('utilisateur 1: ',this.users);
          console.log('mydata 1: ',mydata);

           let arrayTemp = [];
          Object.keys(mydata).forEach((key) => {
                arrayTemp.push({[key]: mydata[key]});
            });
                this.users = arrayTemp;
                let aaaa="65kVmdGOqJhraj3fRUY8xIefglY2"
          console.log('utilisateur 2: ',this.users[0]);

        }
    );
    this.utilisateurService.getUsers();
    this.utilisateurService.emitUsers();
  }


  ngOnDestroy() {
    this.UsersSubscription.unsubscribe();
  }

}
