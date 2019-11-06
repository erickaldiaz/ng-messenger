import { Injectable } from '@angular/core';
import { User} from '../interfaces/user';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private angularFireDatabase: AngularFireDatabase) {}

  getUsers() {
    return this.angularFireDatabase.list('/users');
  }
  getUserById(uid) {
    return this.angularFireDatabase.object('/users/' + uid);
  }
  createUser(user) {
    return this.angularFireDatabase.object('/users/' + user.uid).set(user);
  }
  editUser(user) {
    return this.angularFireDatabase.object('/users/' + user.uid).set(user);
  }
}

 //   let usuario1: User = {
  //     nick: 'Ericka',
  //     subnick: 'SoY lA qUe NuNcA aPrEnDiO dEsDe QuE nAcIo CóMo DeBe ViVir El HuMaNo',
  //     age: 27,
  //     email: 'erickaldiaz@gmail.com',
  //     friend: true,
  //     uid: 1
  //   };
