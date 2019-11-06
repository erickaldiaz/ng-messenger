import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
//métodos para que el usuario pueda hacer login y el otro para que se pueda registrar

  constructor(private angularFireAuth : AngularFireAuth) { }
  loginWithEmail(email:string, password: string){
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }
  registerWithEmail(email:string, password: string){
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  //PARA RECUPERAR LA SESIÓN DEL USUARIO QUE ESTÁ LOGUEADO
  //recibe ingormación cada vez que haya un cambio en la sesión de un usuario
  getStatus() {
    return this.angularFireAuth.authState;
  }
  // permite hacer logout de una sesión. es una promesa que se resuelve al momento que se hace el logOut
  logOut(){
    return this.angularFireAuth.auth.signOut();
  }
  facebookLogin(){
    //es una configuracion previa para hacer login con fb
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.angularFireAuth.auth.signInWithPopup(provider);

  }
}
