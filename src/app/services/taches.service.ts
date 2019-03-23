import { Tache } from './../models/tache.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TachesService {

  constructor(private db: AngularFirestore) { }

  getTaches(id) {
    // return this.db.collection('projets').doc(id).collection('taches').valueChanges();
    return this.db.collection('projets').doc(id).collection('taches').snapshotChanges();
  }

  UpdateTaches(id: string , taches: Tache[]) {
    return this.db.collection('projets').doc(id).update({taches: taches});
  }
}





/*

getTaches(id) {
  // return this.db.collection('projets').snapshotChanges();
  // return this.db.collection('projets').doc(id).get();
  const collectionRef =  this.db.collection('projets').ref;
  console.log('Retrieving list of documents in collection');
  let documents = collectionRef.limit(1).get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log('Parent Document ID: ', doc.id);

        let subCollectionDocs = collectionRef.doc(doc.id).collection('taches').get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              console.log('Sub Document ID: ', doc.data());
            })
          }).catch(err => {
            console.log('Error getting sub-collection documents', err);
          })
      });
    }).catch(err => {
    console.log('Error getting documents', err);
  });

}*/
