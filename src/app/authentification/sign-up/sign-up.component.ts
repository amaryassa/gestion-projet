import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  errorMessage: string;





  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private usersService: UsersService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    //on doit utlisé ces variable la dans les input de html formControlName="email"
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email ]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/) ]],
      nom: ['', [Validators.required, Validators.maxLength(20) ]],
      prenom: ['', [Validators.required, Validators.maxLength(20) ]]
    });
  }

onSubmit() {
  const email = this.signUpForm.get('email').value;
  const password = this.signUpForm.get('password').value;
  const nom = this.signUpForm.get('nom').value;
  const prenom = this.signUpForm.get('prenom').value;
  this.authService.createNewUser(email, password, nom, prenom)
      .then(
          (res) => {
            this.usersService.addUser(res.user.uid, nom, prenom, email);
          },
          (error) => {
            this.errorMessage = error;
          }
      )
      .then(
      () => {
        this.router.navigate(['/utilisateurs']);
      },
    (error) => {
      this.errorMessage = error;
    }
  );
}

}
