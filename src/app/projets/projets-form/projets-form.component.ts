import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProjetsService} from '../../services/projets.service';
import {AngularFirestore} from '@angular/fire/firestore';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-projets-form',
  templateUrl: './projets-form.component.html',
  styleUrls: ['./projets-form.component.css']
})
export class ProjetsFormComponent implements OnInit {

  constructor( private projetsService: ProjetsService,
               private db: AngularFirestore,
               private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.projetsService.formData = {
      id: null,
      nomProjet: '',
      descriptionProjet: '',
    }
  }
  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
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
