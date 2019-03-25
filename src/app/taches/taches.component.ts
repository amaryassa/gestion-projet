import { Projet } from './../models/projet.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetsService } from '../services/projets.service';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {


  public idProjet: string;
  // public taches: Tache[];
  public projet: any;

  constructor(private route: ActivatedRoute,
              private _projetsService: ProjetsService
      ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.idProjet = id;
    if(this._projetsService.getShareProjet() === undefined){
      this._projetsService.getOneProjet(this.idProjet).subscribe(item =>{
        this.projet = item.data() as Projet;
      });
    } else {
    this.projet = this._projetsService.getShareProjet() as Projet;
  }


  }
}
