import { Injectable } from '@angular/core';
import {Projet} from '../models/projet.model';
import {ToastrService} from 'ngx-toastr';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {
  formData: Projet;
  constructor(private db: AngularFirestore) { }

  sharedProjet: Projet;

  getShareProjet() {
    return this.sharedProjet;
  }
  setShareProjet(projet: Projet) {
    this.sharedProjet = projet;
  }

  getProjets() {
    return this.db.collection('projets').snapshotChanges();
  }
  deleteProjet(id: string) {
    return this.db.doc('projets/' + id).delete();
  }

  getOneProjet(id) {
    return this.db.collection('projets').doc(id).get();
}
}
