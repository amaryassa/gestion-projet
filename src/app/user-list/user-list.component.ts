import { Router } from '@angular/router';
import { UtilisateurService } from './../services/utilisateur.service';
import { User } from './../models/User.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[];
  UsersSubscription: Subscription;

  constructor(private router: Router, private utilisateurService: UtilisateurService) { }

  ngOnInit() {
    this.utilisateurService.emitUsers();
  }

  ngOnDestroy() {
    this.UsersSubscription.unsubscribe();
  }
}
