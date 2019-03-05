import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsFormComponent } from './projects/projects-form/projects-form.component';
import { SignUpComponent } from './authentification/sign-up/sign-up.component';
import { SignInComponent } from './authentification/sign-in/sign-in.component';


// Firebase services + enviorment module
import * as firebase from 'firebase'
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { AngularFireDatabaseModule } from '@angular/fire/auth';


firebase.initializeApp( environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectsFormComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



