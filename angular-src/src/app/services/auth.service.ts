import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  username:string;

  constructor(private http:Http) { }
  registerUser(user){
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers:headers})
      .map(res => res.json());
  }
  updateUser(user){
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    return this.http.post('http://localhost:3000/users/update', user, {headers:headers})
      .map(res => res.json());
  }
  deleteUser(id){
      return this.http.delete('http://localhost:3000/users/delete/'+id)
          .map(res => res.json());
  }
authenticateUser(user){
  let headers = new Headers();
  headers.append("Content-Type", 'application/json');
  return this.http.post('http://localhost:3000/users/authenticate', user, {headers:headers})
    .map(res => res.json());
}
forgotUser(user){
  let headers = new Headers();
  headers.append("Content-Type", 'application/json');
  return this.http.post('http://localhost:3000/users/forgot', user, {headers:headers})
    .map(res => res.json());
}

resetUser(token, user){
  let headers = new Headers();
  headers.append("Content-Type", 'application/json');
  return this.http.post('http://localhost:3000/users/reset/'+token, user, {headers:headers})
    .map(res => res.json());
}

findUsers(){
  return this.http.get("http://localhost:3000/users/contacts")
    .map(res => res.json())
}

getProfile(){
  let headers = new Headers();
  this.loadToken();
  headers.append("Authorization", this.authToken)
  headers.append("Content-Type", 'application/json');
  return this.http.get('http://localhost:3000/users/profile', {headers:headers})
    .map(res => res.json());
}


storeUserData(token, user){
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
  this.authToken= token;
  this.user=user;
}

loadToken(){
  const token = localStorage.getItem('token');
  this.authToken = token;
  console.log(token)
}

loggedIn(){
  //console.log(tokenNotExpired());
  return tokenNotExpired('token');
}

logout(){
  this.authToken = null;
  this.user = null;
  localStorage.clear();
}


}
