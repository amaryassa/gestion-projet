import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { TachesService } from './../../services/taches.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/User.model';
import { UsersService } from 'src/app/services/users.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-taches-form',
  templateUrl: './taches-form.component.html',
  styleUrls: ['./taches-form.component.css']
})
export class TachesFormComponent implements OnInit {
  users: User[] ;
  public idProjet: string;
  formErrors: any;
  typeTache: any = ['bug', 'tache'];
  prioriteTache: any = ['urgent', 'normal'];
  currentUser: User;


  constructor(  private route: ActivatedRoute,
                private _usersService: UsersService,
                private _tachesService: TachesService,
                private toastr: ToastrService,
                private formBuilder: FormBuilder,
                private afAuth:  AngularFireAuth

                ) {}

  registrationForm = this.formBuilder.group({
    nomTache: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
    descriptionTache : ['', [Validators.required, Validators.minLength(20)] ],
    usersEnCharge: ['', Validators.required],
    typeTache: ['', Validators.required],
    prioriteTache: ['', Validators.required],

  });


  ngOnInit() {
    this.getCurrentUSer();

    const id = this.route.snapshot.paramMap.get('id');
    this.idProjet = id;
    this._usersService.getUsers().subscribe(actionArray => {
      // console.log(actionArray);
       this.users = actionArray.map(item => {
           return {
               id: item.payload.doc.id,
               ...item.payload.doc.data()
           } as User;
       });
   });



  }


  getCurrentUSer(){
    this.afAuth.auth.onAuthStateChanged(
      (user) => {
        if (user) {
          this._usersService.getOneUser(user.uid)
          .subscribe(item => {
            this.currentUser =  Object.assign({id: user.uid},  item.data());
          });
        }
      }
      );
    }

    onSubmit(formDirective) {
      // console.log(this.registrationForm.value);
      let data = Object.assign({createdBy: this.currentUser, statut: 'non commencée', progress: '0' }, this.registrationForm.value);

      // console.log(data);
      this._tachesService.AddTaches(this.idProjet, data).then(
        res => {
                this.registrationForm.reset();
                formDirective.resetForm();
this.toastr.success('Tâche ajoutée avec succès ', 'Enregistrement');
              },
        err => {console.error(err)}
        )

    }




}





