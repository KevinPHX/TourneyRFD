import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
import {Data} from "../../Data";

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
email:String;
Data:Data[];
  constructor(
  private authService:AuthService,
  private validateService:ValidateService,
  private router:Router,
  private flashMessage:FlashMessagesService,
) { }

  ngOnInit() {
    this.authService.findUsers().subscribe(Data => {
      for (var i =0; i < Data.length; i++){
        //if (user.email !== Data[i].email){
        console.log(Data[i].email)
        }
  })
}

  onForgotSubmit(){
    const user = {
      email: this.email;
    }
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show("Please use a valid email", {cssClass:'alert-danger', timeout:3000});
      return false;
    }

    this.authService.findUsers().subscribe(Data => {
      for (var i =0; i < Data.length; i++){
        if (user.email == Data[i].email){
          this.authService.forgotUser(user).subscribe(data => {
            if(data){
              this.flashMessage.show("An email has been sent to your account",{
                cssClass: "alert-success",
                timeout:5000
              });
              this.router.navigate(['/login'])
            }

          });

        } else {
          this.flashMessage.show("Please enter the email you registered with", {cssClass:'alert-danger', timeout:3000});
          return false;
        }
      }
  })






  }

}
