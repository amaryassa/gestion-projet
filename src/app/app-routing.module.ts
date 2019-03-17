import { SignUpComponent } from './authentification/sign-up/sign-up.component';
import { SignInComponent } from './authentification/sign-in/sign-in.component';
import {UserListComponent} from './user-list/user-list.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from './services/auth-guard.service';
import {ProjetsComponent} from './projets/projets.component';


const routes: Routes = [
  { path: 'authentification/signin', component: SignInComponent },
  { path: 'authentification/signup', component: SignUpComponent },
  { path: 'utilisateurs', canActivate: [AuthGuardService], component: UserListComponent},
  { path: 'projets', canActivate: [AuthGuardService], component: ProjetsComponent },
  { path: '', canActivate: [AuthGuardService], redirectTo: 'projets', pathMatch: 'full'},
  { path: '**', canActivate: [AuthGuardService], redirectTo: 'projets'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
