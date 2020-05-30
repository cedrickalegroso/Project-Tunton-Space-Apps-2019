import { Injectable } from '@angular/core';

import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { auth } from 'firebase/app';

import { Person } from './person.model';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  personDataCollecion: AngularFirestoreCollection<Person>;
  personData$: Observable<Person[]>;


  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,

  ) {

    this.personData$ = this.afAuth.authState.pipe(
      switchMap( user => {
        if (user) {
          return this.afs.doc<Person>(`mockData/${user.uid}`).valueChanges()
        } else {
          return of(null);
        }
      })
    );

  }



  async registerUserAuthentication(value) {
    this.afs.collection('mockData').add({
      name: value.name,
      email: value.email,
      address: value.address,
      medicalCondition: value.medicalCondition,
      sex: value.sex,
      age: value.age,
      controlNo: value.controlNo,
      contact: value.contact,
    })

  }


 
  
}
