import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private router: Router,  private afAuth:  AngularFireAuth) { }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        return new Promise(
            (resolve, reject) => {
                this.afAuth.auth.onAuthStateChanged(
                    (user) => {
                        if (user) {
                            resolve(true); // on laisse le user, il a le droit de passer sur cette route
                        } else {
                            this.router.navigate(['/authentification', 'signin']);
                            resolve(false);
                        }
                    }
                );
            }
        );
        // return true ;
    }
}
