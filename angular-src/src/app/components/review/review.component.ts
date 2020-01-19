import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {DataService} from "../../data.service";
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
import { Http } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  content:String;
  constructor(private dataService: DataService, private authService:AuthService,
    private validateService:ValidateService,
    private router:Router,
    private flashMessage:FlashMessagesService,
    private http: Http) { }

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.href)
    this.id = this.href.substring(8);
    console.log(this.id);
    this.dataService.getReview(this.id).subscribe(review => {
      console.log(review)
      this.documents = review;
    })
    this.dataService.getReplies(this.id).subscribe(data => {
        console.log(data)
        this.replies = data;
    })
  }
  refresh(): void {
    window.location.reload();
  }
  onReplySubmit(){
    const reply = {
      content: this.content,
    }
    this.href = this.router.url;
    console.log(this.href)
    this.id = this.href.substring(8);
    console.log(this.id);
    if(reply.content == undefined || reply.content == ""){
      this.flashMessage.show("If you would like to reply, please fill in the field", {cssClass:'alert-danger', timeout:3000});
      return false
    }
    this.dataService.addReply(reply, this.id).subscribe(data => {
      if(data){
         this.flashMessage.show("Reply Added", {cssClass:'alert-success', timeout:3000});
          window.location.reload();
      } else {
        this.flashMessage.show("Something went wrong", {cssClass:'alert-danger', timeout:3000});
      }
    })

  }

}
