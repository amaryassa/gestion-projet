import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './../../models/User.model';
import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ProjetsService} from '../../services/projets.service';
import {Projet} from '../../models/projet.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-projets-list',
  templateUrl: './projets-list.component.html',
  styleUrls: ['./projets-list.component.css']
})
export class ProjetsListComponent implements OnInit {
  projets: Projet[];
  currentUser: User;
  constructor(private projetsService: ProjetsService,
              private usersService: UsersService,
              private afAuth:  AngularFireAuth,
              private toastr: ToastrService,
              private router: Router
  ) { }

  ngOnInit() {
    this.getCurrentUSer();
    this.projetsService.getProjets().subscribe(actionArray => {
      this.projets = actionArray.map(item => {
        // console.log(item.payload.doc.data());
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Projet;
      });
    });


  }

  onEdit(projet: Projet) {
    this.projetsService.formData = Object.assign({}, projet);

  }

  getCurrentUSer(){
    this.afAuth.auth.onAuthStateChanged(
        (user) => {
          if (user) {
            this.usersService.getOneUser(user.uid)
                .subscribe(item => {
                  this.currentUser  = Object.assign({id: user.uid},  item.data());
                });
          }
        }
    );
  }

  onDelete(id: string) {
    if (confirm('Voulez-vous vraiment supprimer ce projet ?')) {
      this.projetsService.deleteProjet(id).then( res => {
        this.toastr.warning('Projet supprimé avec succès', 'Suppression');
      });
    }
  }

  onConsulte(projet: Projet){
    this.router.navigate(['/projets', projet.id]);
  }
}

