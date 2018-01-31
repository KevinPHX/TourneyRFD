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
    return this.http.post('http://138.68.244.231/users/register', user, {headers:headers})
      .map(res => res.json());
  }
  updateUser(user){
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    return this.http.post('http://138.68.244.231/users/update', user, {headers:headers})
      .map(res => res.json());
  }
  deleteUser(id){
      return this.http.delete('http://138.68.244.231/users/delete/'+id)
          .map(res => res.json());
  }
authenticateUser(user){
  let headers = new Headers();
  headers.append("Content-Type", 'application/json');
  return this.http.post('http://138.68.244.231/users/authenticate', user, {headers:headers})
    .map(res => res.json());
}
getProfile(){
  let headers = new Headers();
  this.loadToken();
  headers.append("Authorization", this.authToken)
  headers.append("Content-Type", 'application/json');
  return this.http.get('http://138.68.244.231/users/profile', {headers:headers})
    .map(res => res.json());
}


storeUserData(token, user){
  localStorage.setItem('id_token', token);
  localStorage.setItem('user', JSON.stringify(user));
  this.authToken= token;
  this.user=user;
}

loadToken(){
  const token = localStorage.getItem('id_token');
  this.authToken = token;
}

loggedIn(){
  return tokenNotExpired('id_token');
}

logout(){
  this.authToken = null;
  this.user = null;
  localStorage.clear();
}


}
