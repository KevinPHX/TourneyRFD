import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from "angular2-flash-messages"
import { Router } from '@angular/router';
import{DataService} from "../../data.service";

@Component({
  selector: 'app-addtournament',
  templateUrl: './addtournament.component.html',
  styleUrls: ['./addtournament.component.css']
})
export class AddtournamentComponent implements OnInit {
  name:String;
  startdate: Date;
  enddate: Date;
  eventswithbids: [Object];
  bidrounds: [Object];
  eventswithoutbids: [Object];
  eventswithbids = [{value: ''}];
  bidrounds = [{value: ''}];
  eventswithoutbids = [{value: ''}];
  screws:String;
  link: String;
  address: String;

  constructor(private validateService: ValidateService, private flashMessages:FlashMessagesService, private authService:AuthService, private router:Router, private dataService:DataService) { }

  ngOnInit() {  }




  onTournamentSubmit(){
    //var eventswithbids = []
    // for (var i = 0; i < this.eventswithbids.length; i++){
    //   eventswithbids.push(this.eventswithbids[i].value)
    // }
    //var eventswithoutbids = []
    // for (var i = 0; i < this.eventswithoutbids.length; i++){
    //   eventswithoutbids.push(this.eventswithoutbids[i].value)
    // }
    //var bidrounds = []
    // for (var i = 0; i < this.bidrounds.length; i++){
    //   bidrounds.push(this.bidrounds[i].value)
    // }


    const tournament = {
      name: this.name,
      startdate: this.startdate,
      enddate: this.enddate,
      eventswithbids: this.eventswithbids,
      bidrounds: this.bidrounds,
      eventswithoutbids: this.eventswithoutbids,
      screws: this.screws,
      link: this.link,
      address: this.address,
      }
      if(!this.validateService.validateTournament(tournament)){
        this.flashMessages.show("Please fill in all fields", {cssClass:'alert-danger', timeout:3000});
        return false;
      }
      if (this.link.substring(0,23) != "https://www.tabroom.com") {
        this.flashMessages.show("Please use the Tabroom link", {cssClass:'alert-danger', timeout:3000});
        return false;
      }
      for(var i = 0; i < tournament.eventswithbids.length; i++){
        if (tournament.eventswithbids[i].value == "" || tournament.bidrounds[i].value == "") {
          this.flashMessages.show("Please fill in Events with Bids and Bid Rounds or remove empty fields", {cssClass:'alert-danger', timeout:3000});
          return false
        }
      }
      for(var i = 0; i < tournament.eventswithoutbids.length; i++){
        if (tournament.eventswithoutbids[i].value == "") {
          this.flashMessages.show("Please fill in Events without Bids or remove empty fields", {cssClass:'alert-danger', timeout:3000});
          return false
        }
      }
      this.dataService.addTournament(tournament).subscribe(data => {
        if(data){
           this.flashMessages.show("Successfully added tournament", {cssClass:'alert-success', timeout:3000});
            this.router.navigate(['/dashboard'])
        } else {
          this.flashMessages.show("Something went wrong", {cssClass:'alert-danger', timeout:3000});
           this.router.navigate(['/addtournament'])
        }
      });
    }


  add() {
    for (var i = 0; i < this.eventswithbids.length; i++){
      var event = this.eventswithbids[i].value
      this.eventswithbids.splice(i, 1, {value: event});
    }
    this.eventswithbids.splice(this.eventswithbids.length, 1, {value: ""});
    console.log(this.eventswithbids)
  }
  addbidrounds() {
    for (var i = 0; i < this.bidrounds.length; i++){
      var round = this.bidrounds[i].value
      this.bidrounds.splice(i, 1, {value: round});
    }
    this.bidrounds.splice(this.bidrounds.length, 1, {value: ''});
  }
  addwithoutbids() {
    for (var i = 0; i < this.eventswithoutbids.length; i++){
      var withoutbid = this.eventswithoutbids[i].value
      this.eventswithoutbids.splice(i, 1, {value: withoutbid});
    }
    this.eventswithoutbids.splice(this.eventswithoutbids.length, 1, {value: ''});
  }
  remove(index){
    console.log("REMOVE INDEX"+index)
    this.eventswithbids.splice(index, 1);
    this.bidrounds.splice(index, 1);
    console.log("REMOVE LENGTH"+this.eventswithbids.length)
  }
  removeWithoutBid(index){
    this.eventswithoutbids.splice(index, 1);
  }

}
