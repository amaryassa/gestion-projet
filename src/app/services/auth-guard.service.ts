import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private router: Router) { }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        return new Promise(
            (resolve, reject) => {
                firebase.auth().onAuthStateChanged(
                    (user) => {
                        if(user){
                            resolve(true); // on laisse le user, il a le droit de passer sur cette route
                        } else {
                            this.router.navigate(['/authentification', 'signin']);
                            resolve(false);
                        }
                    }
                );
            }
        );
    }
}
