import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './authentification/sign-up/sign-up.component';
import { SignInComponent } from './authentification/sign-in/sign-in.component';


// Firebase services + enviorment module
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ProjetsListComponent } from './projets/projets-list/projets-list.component';
import { ProjetsComponent } from './projets/projets.component';
import { ProjetsFormComponent } from './projets/projets-form/projets-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TachesComponent } from './taches/taches.component';
import { TachesListComponent } from './taches/taches-list/taches-list.component';
import { TachesFormComponent } from './taches/taches-form/taches-form.component';
import { TacheDetailsComponent } from './taches/tache-details/tache-details.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsListComponent } from './comments/comments-list/comments-list.component';
import { CommentsFormComponent } from './comments/comments-form/comments-form.component';




@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HeaderComponent,
    UserListComponent,
    ProjetsListComponent,
    ProjetsComponent,
    ProjetsFormComponent,
    TachesComponent,
    TachesListComponent,
    TachesFormComponent,
    TacheDetailsComponent,
    CommentsComponent,
    CommentsListComponent,
    CommentsFormComponent
  ],
  imports: [
    BrowserModule,
      AngularFireModule.initializeApp(environment.firebaseConfig), // imports firebase/app needed for everything
      AngularFirestoreModule, // imports firebase/firestore, only needed for database features
      AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
      AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



