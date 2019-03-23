import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/models/User.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-taches-form',
  templateUrl: './taches-form.component.html',
  styleUrls: ['./taches-form.component.css']
})
export class TachesFormComponent implements OnInit {

  constructor(private usersService: UsersService,

  ) { }


  usersEnCharge = new FormControl();
  users: User[] ;

  ngOnInit() {
    this.usersService.getUsers().subscribe(actionArray => {
      // console.log(actionArray);
       this.users = actionArray.map(item => {
           return {
               id: item.payload.doc.id,
               ...item.payload.doc.data()
           } as User;
       });
   });



  }
  onSubmit(){
    console.log(this.usersEnCharge.value);
  }

}
