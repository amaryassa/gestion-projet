import { Tache } from './../../models/tache.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TachesService } from 'src/app/services/taches.service';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-taches-list',
  templateUrl: './taches-list.component.html',
  styleUrls: ['./taches-list.component.css']
})
export class TachesListComponent implements OnInit {
  public idProjet: string;
  // public taches: Tache[];
  public taches: any;
  displayedColumns: string[] = ['nomTache', 'usersEnCharge', 'statut', 'progress', 'typeTache', 'prioriteTache'] ;
  dataSource: MatTableDataSource <Tache>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private db: AngularFirestore,
              private _tachesService: TachesService,
      ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.idProjet = id;
    this._tachesService.getTaches(id).subscribe(actionArray => {
      this.taches = actionArray.map(item => {
        // console.log(item.payload);
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
      });
      this.dataSource = new MatTableDataSource(this.taches);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }
  onNavigateDetail(tache: Tache){
    console.log('tache: ', tache);
    this._tachesService.setShareTache(tache);

     this.router.navigate(['/projets', this.idProjet, 'datails-tache', tache.id]);

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
