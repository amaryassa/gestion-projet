import { AngularFirestore } from '@angular/fire/firestore';
import { Tache } from './../models/tache.model';
import { TachesService } from './../services/taches.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { flatten } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {


  public idProjet: string;
  // public taches: Tache[];
  public taches: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private db: AngularFirestore,
              private tachesService: TachesService
      ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.idProjet = id;
// this.taches = this.tachesService.getTaches(this.idProjet);
// this.taches.subscribe(console.log);



this.tachesService.getTaches(id).subscribe(actionArray => {
  this.taches = actionArray.map(item => {
    console.log(item.payload);
    return {
      id: item.payload.doc.id,
      ...item.payload.doc.data()
    }
  });
});


// let data = Object.assign({},  {nomTache: 'paris ALger', prenomTache: 'Bouzeguene'});
// this.db.collection('projets').doc(this.idProjet).collection('taches').add(data);
  }
}
