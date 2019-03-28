import { Tache } from './../models/tache.model';
import { AngularFirestore } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class TachesService {

  constructor(private db: AngularFirestore, private AFS: AngularFireStorage) { }

  sharedTache: Tache;

  getShareTache() {
    return this.sharedTache;
  }
  setShareTache(tache: Tache){
    this.sharedTache = tache;
  }


  getTaches(id) {
    // return this.db.collection('projets').doc(id).collection('taches').valueChanges();
    return this.db.collection('projets').doc(id).collection('taches').snapshotChanges();
  }

  getOneTache(idProjet, idTache) {
    return this.db.collection('projets').doc(idProjet).collection('taches').doc(idTache).get();
  }


  UpdateTaches(id: string , taches: Tache[]) {
    return this.db.collection('projets').doc(id).update({taches: taches});
  }
  AddTaches(id, data) {
    return this.db.collection('projets').doc(id).collection('taches').add(data);
  }

  uploadFile(file: File){
    return new Promise(
      (resolve, reject) => {
        const uniqueFileName = Date.now().toString();
       const filePath = 'images/' + uniqueFileName + file.name;
       const fileRef = this.AFS.ref(filePath);
       const task = this.AFS.upload(filePath, file);
       task.snapshotChanges().pipe(
        finalize(() => resolve(fileRef.getDownloadURL()) )
       );
      }
    );
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
