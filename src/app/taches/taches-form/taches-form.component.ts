import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { TachesService } from './../../services/taches.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/User.model';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-taches-form',
  templateUrl: './taches-form.component.html',
  styleUrls: ['./taches-form.component.css']
})
export class TachesFormComponent implements OnInit {
  users: User[] ;
  public idProjet: string;
  formErrors: any;
  typeTache: any = ['Bug', 'Tache'];
  prioriteTache: any = ['Urgent', 'Normal'];
  currentUser: User;

  constructor(  private route: ActivatedRoute,
                private _usersService: UsersService,
                private _tachesService: TachesService,
                private db: AngularFirestore,
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

    onSubmit() {
      // console.log(this.registrationForm.value);
      let data = Object.assign({createdBy: this.currentUser },this.registrationForm.value);

      console.log(data)
      this.db.collection('projets').doc(this.idProjet).collection('taches').add(data);
        // this._tachesService.AddTaches(this.idProjet, data);
       /*  .subscribe(
          response => console.log('Success!', response),
          error => console.error('Error!', error)
        ); */
    }




}





