import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {DataService} from "../../data.service";
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../services/validate.service';
import { Http } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import {ModalModule} from "ngx-modal";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  isDisabled = true;
  constructor(private dataService: DataService, private authService:AuthService,
    private validateService:ValidateService,
    private router:Router,
    private flashMessage:FlashMessagesService,
    private http: Http) { }

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.href)
    this.id = this.href.substring(7);
    console.log(this.id);
    this.dataService.getPhotos(this.id).subscribe(photos => {
        this.photos = photos;
        console.log(photos)

        for (let photo of this.photos) {
            photo.imageData = 'data:image/png;base64,' + photo.img.data;
        }
    });
    this.dataService.getTournament(this.id).subscribe(data => {
        console.log(data)
        this.documents = data;
    })
    if (this.authService.loggedIn()){
      this.isDisabled = false
    }
  }

  showMessage(){
    if (!this.authService.loggedIn()){
      this.flashMessage.show("You must be logged in",{
        cssClass: "alert-danger",
        timeout:5000
      });
    } else {
      // this.flashMessage.show("Your picture has been uploaded",{
      //   cssClass: "alert-success",
      //   timeout:5000
      // });
      // window.location.reload();
    }
  }

  customStyle = {
    selectButton: {
      "background-color": "#3aa9e7",
      "color":"white"
    },
    clearButton: {
      "background-color": "#FFF",
      "color": "#000",
      "margin-left": "10px"
    },
  }

}
