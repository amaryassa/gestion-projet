import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.css']
})
export class CommentsFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  registrationForm = this.formBuilder.group({
    commentTache : ['', [Validators.required, Validators.minLength(10)] ]

  });


  ngOnInit() {
  }

  onSubmit(formDirective) {
    console.log('Submit', formDirective.value);
  }

}
