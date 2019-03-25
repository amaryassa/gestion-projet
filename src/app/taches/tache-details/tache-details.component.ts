import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProjetsService } from 'src/app/services/projets.service';
import { Tache } from 'src/app/models/tache.model';
import { TachesService } from 'src/app/services/taches.service';
import { Projet } from 'src/app/models/projet.model';

@Component({
  selector: 'app-tache-details',
  templateUrl: './tache-details.component.html',
  styleUrls: ['./tache-details.component.css']
})
export class TacheDetailsComponent implements OnInit {
  public idProjet: string;
  public idTache: string;
  public projet: Projet;
  public tache:  Tache = { 'id': '',
                        'createdBy': { 'email': '', 'id': '', 'nom': '', 'prenom': ''},
                        'descriptionTache': '',
                        'nomTache': '',
                        'prioriteTache': '',
                        'progress': 0,
                        'statut': '',
                        'typeTache': '',
                        'usersEnCharge': [] };


  constructor( private route: ActivatedRoute,
              private _projetsService: ProjetsService,
              private _tachesService: TachesService
              ) { }

  ngOnInit() {
    const id_projet = this.route.snapshot.paramMap.get('id');
    const id_tache = this.route.snapshot.paramMap.get('id-tache');
     this.idProjet = id_projet;
     this.idTache = id_tache;
     if(this._tachesService.getShareTache() === undefined){
        this._tachesService.getOneTache(this.idProjet, this.idTache).subscribe(item =>{
                  this.tache = item.data() as Tache;
            });
        } else {
          this.tache = this._tachesService.getShareTache();
     }


     if(this._projetsService.getShareProjet() === undefined){
      this._projetsService.getOneProjet(this.idProjet).subscribe(item =>{
        this.projet = item.data() as Projet;
      });
    } else {
    this.projet = this._projetsService.getShareProjet() as Projet;
  }

  }

}
