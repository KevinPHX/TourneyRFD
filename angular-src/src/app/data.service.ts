import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DataService implements OnInit {
  user:Object;
  tournament:Object;
  username:String;
  report: Object;
  review: Object;
  reply: Object;
  constructor(private http: Http, private authService: AuthService, private router: Router) {
    console.log('Data Service Initialized...');
    this.user;
  }

  getPhotos(tournamentid) {
    return this.http.get("http://localhost:3000/users//photo/"+tournamentid)
        .map(res => res.json());
  }
  addTournament(tournament){
      let headers = new Headers();
      headers.append("Content-Type", 'application/json');
      return this.http.post('http://localhost:3000/users/addtournament', tournament, {headers:headers}).map(res => res.json());
  }
  // addCoordinates(tournamentid){
  //     let headers = new Headers();
  //     headers.append("Content-Type", 'application/json');
  //     return this.http.post('http://localhost:3000/users/addcoordinates/' + tournamentid, {headers:headers}).map(res => res.json());
  // }
  editTournament(tournamentid, tournament){
      let headers = new Headers();
      headers.append("Content-Type", 'application/json');
      return this.http.post('http://localhost:3000/users/edittournament/' + tournamentid, tournament, {headers:headers}).map(res => res.json());
  }
  deleteTournament(tournamentid){
    return this.http.post('http://localhost:3000/users/deletetournament/'+tournamentid).map(res => res.json());
  }
  addReview(review, tournamentid){
    return this.authService.getProfile().flatMap(profile => {
      this.user = profile.user;
      this.id = profile.user._id;
      console.log(this.user)
      let headers = new Headers();
      headers.append("Content-Type", 'application/json');
      return this.http.post('http://localhost:3000/users/addreview/'+ tournamentid +'/' + this.id, review, {headers:headers}).map(res => res.json());
    })
  }
  editReview(review, reviewid){
    return this.authService.getProfile().flatMap(profile => {
      this.user = profile.user;
      this.id = profile.user._id;
      console.log(this.user)
      let headers = new Headers();
      headers.append("Content-Type", 'application/json');
      return this.http.post('http://localhost:3000/users/editreview/'+ reviewid+'/' + this.id, review, {headers:headers}).map(res => res.json());
    })
  }
  averageReviews(tournamentid){
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    return this.http.post('http://localhost:3000/users/averagereviews/'+ tournamentid, {headers:headers}).map(res => res.json());
  }
  addReply(reply, reviewid){
    return this.authService.getProfile().flatMap(profile => {
      this.user = profile.user;
      this.id = profile.user._id;
      console.log(this.user)
      let headers = new Headers();
      headers.append("Content-Type", 'application/json');
      return this.http.post('http://localhost:3000/users/addreply/'+ reviewid +'/' + this.id, reply, {headers:headers}).map(res => res.json());
    })
  }
  rateReview(reviewid){
    return this.authService.getProfile().flatMap(profile => {
      this.user = profile.user;
      this.id = profile.user._id;
      console.log(this.user)
      return this.http.post("http://localhost:3000/users/helpful/"+reviewid+"/"+ this.id).map(res => res.json())
    })
  }
  reportReview(report, reviewid){
    return this.authService.getProfile().flatMap(profile => {
      this.user = profile.user;
      this.id = profile.user._id;
      console.log(this.user)
      let headers = new Headers();
      headers.append("Content-Type", 'application/json');
      return this.http.post('http://localhost:3000/users/reportreview/'+ reviewid +'/' + this.id, report, {headers:headers}).map(res => res.json());
    })
  }



  getAllTournaments(){
    return this.http.get("http://localhost:3000/users/getalltournaments")
      .map(res => res.json())
  }
  getTournament(tournamentid){
   return this.http.get("http://localhost:3000/users/gettournament/" + tournamentid)
     .map(res => res.json())
 }
 getReview(reviewid){
  return this.http.get("http://localhost:3000/users/getreview/" + reviewid)
    .map(res => res.json())
}
getReviews(tournamentid){
 return this.http.get("http://localhost:3000/users/getreviews/" + tournamentid)
   .map(res => res.json())
}
getUserReviews(){
  return this.authService.getProfile().flatMap(profile => {
    this.user = profile.user;
    this.id = profile.user._id;
    console.log(this.user)
    return this.http.get('http://localhost:3000/users/getuserreviews/' + this.id).map(res => res.json());
  })
}
getReplies(reviewid){
 return this.http.get("http://localhost:3000/users/getreplies/" + reviewid)
   .map(res => res.json())
}
   ngOnInit() {
     this.addReview().subscribe(profile => {
     },
     err => {
       console.log(err);
       return false;
     });
     this.editReview().subscribe(profile => {
     },
     err => {
       console.log(err);
       return false;
     });
     this.addReply().subscribe(profile => {
     },
     err => {
       console.log(err);
       return false;
     });
     this.getUserReviews().subscribe(profile => {
     },
     err => {
       console.log(err);
       return false;
     });
     this.rateReview().subscribe(profile => {
     },
     err => {
       console.log(err);
       return false;
     });
   }


   }
