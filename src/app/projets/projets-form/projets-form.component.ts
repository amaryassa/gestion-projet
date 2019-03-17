import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProjetsService} from '../../services/projets.service';
import {AngularFirestore} from '@angular/fire/firestore';

import { ToastrService } from 'ngx-toastr';
import {User} from '../../models/User.model';
import {UsersService} from '../../services/users.service';
import {AngularFireAuth} from '@angular/fire/auth';
@Component({
  selector: 'app-projets-form',
  templateUrl: './projets-form.component.html',
  styleUrls: ['./projets-form.component.css']
})
export class ProjetsFormComponent implements OnInit {

  currentUser: User;

  constructor( public projetsService: ProjetsService,
               private db: AngularFirestore,
               private toastr: ToastrService,
               private afAuth:  AngularFireAuth,
               private usersService: UsersService
  ) { }

  ngOnInit() {

    this.resetForm();
    this.getCurrentUSer();
  }
getCurrentUSer(){
  this.afAuth.auth.onAuthStateChanged(
      (user) => {
        if (user) {
          this.usersService.getOneUser(user.uid)
              .subscribe(item => {
                this.currentUser = item.data();
              });
        }
      }
  );
}
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.projetsService.formData = {
      id: null,
      nomProjet: '',
      descriptionProjet: '',
      createdBy: this.currentUser,
    }
  }
  onSubmit(form: NgForm) {
    let data = Object.assign({createdBy: this.currentUser},  form.value);
    delete data.id;


    if (form.value.id == null){
      this.db.collection('projets').add(data);
      this.toastr.success('Projet Enregistré avec succés ', 'Enregistrement');
    }
    else {
      this.db.doc('projets/' + form.value.id).update(data);
      this.toastr.success( 'Projet Modifié avec succés ', 'Modification');
    }
    this.resetForm(form);
  }

}
