import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {
  
  constructor(
   public db: AngularFirestore,
   public afAuth: AngularFireAuth
 ){
 }

 toggleLogin()
 {
   console.log("LoginTriggered");
   sessionStorage.setItem("isLoggedIn", "true");
 }

 toggleLogoff()
 {
  console.log("LogoffTriggered");
  sessionStorage.setItem("isLoggedIn", "false");
 }

  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().onAuthStateChanged(function(user){
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      })
    })
  }

  updateCurrentUser(value){
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: value.name,
        photoURL: user.photoURL
      }).then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }
}
