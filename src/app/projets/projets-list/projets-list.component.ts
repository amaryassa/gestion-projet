import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {AngularFirestore} from '@angular/fire/firestore';
import {ProjetsService} from '../../services/projets.service';
import {Projet} from '../../models/projet.model';

@Component({
  selector: 'app-projets-list',
  templateUrl: './projets-list.component.html',
  styleUrls: ['./projets-list.component.css']
})
export class ProjetsListComponent implements OnInit {
  projets: Projet[];
  constructor(private projetsService: ProjetsService,
              private db: AngularFirestore,
              private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.projetsService.getProjets().subscribe(actionArray => {

      this.projets = actionArray.map(item => {
        console.log(item.payload.doc.data());
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Projet;
      });
    });


  }

  onEdit(projet: Projet) {
    this.projetsService.formData = Object.assign({}, projet);
    console.log('jsk');
  }
}
