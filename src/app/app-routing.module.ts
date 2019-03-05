import { SignUpComponent } from './authentification/sign-up/sign-up.component';
import { SignInComponent } from './authentification/sign-in/sign-in.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'connexion', component: SignInComponent },
  { path: 'inscription', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
