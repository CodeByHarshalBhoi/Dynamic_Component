import { Component, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../Modes/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  showConfirmDeleteComponent:boolean = false;
  constructor(private userService: UserService) {

  }

  users: User[] = [];

  userToDelete!:User

  ngOnInit() {
    this.users = this.userService.users;
}
OnDeleteClicked(user:User){
  this.showConfirmDeleteComponent = true
  this.userToDelete =user;
}
OnDeleteConfirm(val:boolean){
  this.showConfirmDeleteComponent = false;
  if(val){
  let index =  this.userService.users.indexOf(this.userToDelete);
  this.userService.users.splice(index, 1);
  }
}
}
