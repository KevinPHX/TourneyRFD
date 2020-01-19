import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
import { Http } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import {Data} from "../../Data";

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css'],
})
export class ResetComponent implements OnInit {
password:String;
data:Data[];
  constructor(
    private authService:AuthService,
    private validateService:ValidateService,
    private router:Router,
    private flashMessage:FlashMessagesService,
    private http: Http
  ) {

  }

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.href)
    this.token = this.href.substring(7,47);
    console.log(this.token);
    this.authService.findUsers().subscribe(data => {
      for (var i =0; i < data.length; i++){
        if (this.token == data[i].resetPasswordToken){
          console.log(data[i])
        }
      }
  }
}


  onResetSubmit(){

    this.authService.findUsers().subscribe(data => {
      for (var i =0; i < data.length; i++){
        if (this.token == data[i].resetPasswordToken){
          const user = {
            password:this.password;
          }
          this.href = this.router.url;
          console.log(this.href)
          this.token = this.href.substring(7,47);
          console.log(this.token);

          this.authService.resetUser(this.token, user).subscribe(data => {
            if(data){
              this.flashMessage.show("Your password has been changed",{
                cssClass: "alert-success",
                timeout:5000
              });
              this.router.navigate(['/login'])
            } else {
              this.flashMessage.show("Failure to change password",{
                cssClass: "alert-success",
                timeout:5000
              });
              this.router.navigate(['/reset/' + this.token])
            }


          })

        }
      }
    });

  }

}
