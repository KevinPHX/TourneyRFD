import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from "angular2-flash-messages"
import { Router } from '@angular/router';
import {ModalModule} from "ngx-modal";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  role: String;
  firstname: String;
  lastname: String;
  username: String;
  email: String;
  password: String;
  affiliation: String;
  agreement: Any;
  constructor(private validateService: ValidateService, private flashMessages:FlashMessagesService, private authService:AuthService, private router:Router, private modal:ModalModule) { }

  ngOnInit() {
  }
onRegisterSubmit(){
  const user={
    role: this.role,
    firstname: this.firstname,
    lastname: this.lastname,
    email: this.email,
    username: this.username,
    password: this.password,
    affiliation: this.affiliation,
    }
    this.authService.findUsers().subscribe(Data => {
    if(!this.validateService.validateRegister(user)){
      this.flashMessages.show("Please fill in all fields", {cssClass:'alert-danger', timeout:3000});
      return false;
    }
    if(!this.agreement) {
      console.log(this.agreement)
      this.flashMessages.show("Please indicate that you accept the Terms and Conditions", {cssClass:'alert-danger', timeout:3000});
      return false;
    }
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessages.show("Please use a valid email", {cssClass:'alert-danger', timeout:3000});
      return false;
    }
    for (var i = 0; i < Data.length; i++){
        if (user.email == Data[i].email){
          this.flashMessages.show("Please use a different email", {cssClass:'alert-danger', timeout:3000});
          this.router.navigate(['/register'])
          return false;
        }
      }
        for (var j = 0; j < Data.length; j++){
        if (user.username == Data[j].username){
          this.flashMessages.show("Please use a different username", {cssClass:'alert-danger', timeout:3000});
          this.router.navigate(['/register'])
          return false;
        }
      }





      // this.flashMessages.show("Check your email to verify account", {cssClass:'alert-success', timeout:10000});
      // this.router.navigate(['/login'])


    //Register User
    this.authService.registerUser(user).subscribe(data => {
      if(data){
         this.flashMessages.show("Check your email to verify account", {cssClass:'alert-success', timeout:3000});
         this.router.navigate(['/login'])
      } else {
        this.flashMessages.show("Something went wrong", {cssClass:'alert-danger', timeout:3000});
        this.router.navigate(['/register'])
      }
    });

    document.getElementById("openModalButton").click();

  }







  }
}
