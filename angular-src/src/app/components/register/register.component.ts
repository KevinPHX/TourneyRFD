import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from "angular2-flash-messages"
import { Router } from '@angular/router';



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
  phonenumber: String;
  email: String;
  password: String;
  address: String;
  zipcode: String;
  school: String;
  constructor(private validateService: ValidateService, private flashMessages:FlashMessagesService, private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }
onRegisterSubmit(){
  const user={
    role: this.role,
    firstname: this.firstname,
    lastname: this.lastname,
    phonenumber: this.phonenumber,
    email: this.email,
    username: this.username,
    password: this.password,
    address: this.address,
    zipcode: this.zipcode,
    school: this.school,
    }
    if(!this.validateService.validateRegister(user)){
      this.flashMessages.show("Please fill in all fields", {cssClass:'alert-danger', timeout:3000});
      return false;
    }
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessages.show("Please use a valid email", {cssClass:'alert-danger', timeout:3000});
      return false;
    }

      this.flashMessages.show("Check your email to verify account", {cssClass:'alert-success', timeout:3000});
      this.router.navigate(['/login'])



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
  }
}
