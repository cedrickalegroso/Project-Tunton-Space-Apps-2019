import { Injectable } from '@angular/core';


import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

import { async } from '@angular/core/testing';

import * as firebase from 'firebase/app';

// models

import { Trace } from '../services/trace.model'

//misc
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackerService {


  private TraceCollection: AngularFirestoreCollection<Trace>;
  traceduser$: Observable<Trace[]>;
  data$: Observable<any[]>;
  user;


  constructor(
    private afs: AngularFirestore,
    private router: Router,
    private afAuth: AngularFireAuth,
  ) {



  }




  async addDataMock() {

    let randomUid = Math.floor(Date.now() / 1000);

    this.afs.collection('mockData').add({
      name: 'Jason Makilig',
      contact: '094975099237',
      gender: 'Male',
      controlNo: 'CA-4868-4456',
      address: 'San Lorenzo, Bataan',
      class: 'mock'
    });

    this.afs.collection('mockData').add({
      name: 'Bea Lrence',
      contact: '094975099237',
      gender: 'Female',
      controlNo: 'CA-2348-4456',
      address: 'San Doming, Leyte',
      class: 'mock'
    });

    this.afs.collection('mockData').add({
      name: 'Jaysom Mingua',
      contact: '094975099237',
      gender: 'Male',
      controlNo: 'CA-4868-5892',
      address: 'Jaro, Iloilo',
      class: 'mock'
    });

    this.afs.collection('mockData').add({
      name: 'Zerk Lambog',
      contact: '094975099237',
      gender: 'Male',
      controlNo: 'CA-4794-4456',
      address: 'San Miguel, Bacolod',
      class: 'mock'
    });


    this.afs.collection('mockDataActions').add({
      name: 'Jason Makilig',
      place: 'Sm Mall of Asia',
      timein: '42659',
      timeout: '56659',
      controlNo: 'CA-4868-4456',
      class: 'mock'
    });

    this.afs.collection('mockDataActions').add({
      name: 'Bea Lrence',
      place: 'Luzon Public Market',
      timein: '48659',
      timeout: '55659',
      controlNo: 'CA-4868-4456',
      class: 'mock'
    });

    this.afs.collection('mockDataActions').add({
      name: 'Bea Lrence',
      place: 'Luzon Pharmacy',
      timein: '56659',
      timeout: '58649',
      controlNo: 'CA-4868-4456',
      class: 'mock'
    });

  }


  searchUser(value) {

    console.log(value)

    //this.afs.collection('mockData').valueChanges()
   

  }

}

function test(data){
 
  console.log('s')

  this.data$ = data

  
}

/*

 this.afs.collection('mockData', ref => ref.where('controlNo', '==', value.controlNO).limit(1)).get()
    .toPromise().then(
      function (querySnapshot) {
        if (querySnapshot.empty) {
          alert('no user found')
        } else {
          querySnapshot.forEach(async function (doc) {
            let data = doc.data()
            this.traceduser$.pipe(data)
          })
        }
      }
    )




    this.traceduser$ = traceColl.get().pipe(
      switchMap(user => {
        if (user) {
          this.TraceCollection = this.afs.collection<Trace>('mockData', ref => {
            return ref
              .where('controlNo', '==', value.controlNO)
              .limit(1)
          });

          return this.traceduser$ = this.TraceCollection.valueChanges();

        } else {
          return of(null);
        }
      })
    )


    .get()
      .toPromise().then(
        function (querySnapshot) {
          if (querySnapshot.empty) {
            alert('no user found')
          } else {
            querySnapshot.forEach(async function (doc) {
              let data = doc.data()
              alert('user name is ' + data.name)
            })
          }
        }
      );



  }

*/

