import { SignUpComponent } from './authentification/sign-up/sign-up.component';
import { SignInComponent } from './authentification/sign-in/sign-in.component';
import {UserListComponent} from './user-list/user-list.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from './services/auth-guard.service';
import {ProjetsComponent} from './projets/projets.component';
import { TachesComponent } from './taches/taches.component';
import { TacheDetailsComponent } from './taches/tache-details/tache-details.component';


const routes: Routes = [
  { path: '', canActivate: [AuthGuardService], redirectTo: 'projets', pathMatch: 'full'},
  { path: 'authentification/signin', component: SignInComponent },
  { path: 'authentification/signup', component: SignUpComponent },
  { path: 'utilisateurs', canActivate: [AuthGuardService], component: UserListComponent},
  { path: 'projets', canActivate: [AuthGuardService], component: ProjetsComponent },
  { path: 'projets/:id', canActivate: [AuthGuardService], component: TachesComponent },
  { path: 'projets/:id/datails-tache/:id-tache', canActivate: [AuthGuardService], component: TacheDetailsComponent },
  { path: '**', canActivate: [AuthGuardService], redirectTo: 'projets'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
