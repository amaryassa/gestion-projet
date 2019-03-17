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

  getProjets() {
    return this.db.collection('projets').snapshotChanges();
  }
}
