import { TachesService } from './../services/taches.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {

  private idProjet;
  private taches;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private tachesService: TachesService
      ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.idProjet = id;

   this.tachesService.getTaches(this.idProjet).subscribe(item => {
    this.taches = item.data();
    console.log(item.data())
   });

  }

}
