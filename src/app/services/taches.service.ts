import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TachesService {

  constructor(private db: AngularFirestore) { }

  getTaches(id) {
    // return this.db.collection('projets').snapshotChanges();
    return this.db.collection('projets').doc(id).get();
  }
}
