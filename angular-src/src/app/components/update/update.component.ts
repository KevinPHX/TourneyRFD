import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from "angular2-flash-messages"
import { Router } from '@angular/router';
import { Http, Response} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  data:Any;
  user:Object;
  _id: String;
  role: String;
  firstname: String;
  lastname: String;
  username: String;
  email: String;
  password: String;
  affiliation: String;
  constructor(private validateService: ValidateService, private flashMessages:FlashMessagesService, private authService:AuthService, private router:Router, private http:Http) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.role = profile.user.role;
      this.affiliation = profile.user.affiliation;
      this.firstname = profile.user.firstname;
      this.lastname = profile.user.lastname;
      this.username = profile.user.username;
      this.email = profile.user.email;
      this.password = profile.user.password;
    },
    err => {
      console.log(err);
      return false;
    });
  }
  refresh(): void {
    window.location.reload();
  }
  // deleteUser(id){
  //   var user = this.user;
  //   this.authService.deleteUser(id).subscribe(data => {
  //   if(data.n == 1){
  //       for(var i = 0;i < user.length;i++){
  //           if(user[i].id == id){
  //               user.splice(i, 1);
  //           }
  //       }
  //   }
  // })
  // }

  onUpdateSubmit(){
    this.href = this.router.url;
    console.log(this.href)
    this.id = this.href.substring(8);
    console.log(this.id);
    const user={
      role: this.role,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      username: this.username,
      affiliation: this.affiliation,
      }
      if(!this.validateService.validateUpdate(user)){
        this.flashMessages.show("Please fill in all fields", {cssClass:'alert-danger', timeout:3000});
        return false;
      }
      if(!this.validateService.validateEmail(user.email)){
        this.flashMessages.show("Please use a valid email", {cssClass:'alert-danger', timeout:3000});
        return false;
      }
      this.flashMessages.show("You are now updated", {cssClass:'alert-success', timeout:3000});

      this.router.navigate(['/profile'])
      .then(() => {
        window.location.reload();
      });




      //Register New User
      this.authService.updateUser(this.id, user).subscribe(data => {
        console.log(data)
        if(data){
          this.flashMessages.show("You are now updated", {cssClass:'alert-success', timeout:3000});
          this.router.navigate(['/profile'])
        } else {
          this.flashMessages.show("Something went wrong", {cssClass:'alert-danger', timeout:3000});
          this.router.navigate(['/update'])
        }
      });





    }
}
