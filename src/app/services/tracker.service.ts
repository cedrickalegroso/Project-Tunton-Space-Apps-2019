import { Injectable } from '@angular/core';


import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

import { async } from '@angular/core/testing';

import * as firebase from 'firebase/app';

import * as faker from 'node_modules/ng-faker'


// models

import { Trace } from '../services/trace.model'

//misc
import { Router } from '@angular/router';
import { Observable, of, from } from 'rxjs';
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


  //Tarlac Public Market

  //Luzon Pharmacy

  //SM MOA

  async addDataMock() {

    this.afs.collection('mockDataActions').add({
      vulnerability: 10.1,
      name: 'Jorge Johnson',
      place: 'Luzon Pharmacy',
      timein: '33659',
      timeout: '40549',
      controlNo: 'CA-8234-373',
    });


    this.afs.collection('mockDataActions').add({
      vulnerability: 10.1,
      name: 'Jorge Johnson',
      place: 'Tarlac Public Market',
      timein: '43549',
      timeout: '49546',
      controlNo: 'CA-8234-373',
    });

    this.afs.collection('mockDataActions').add({
      vulnerability: 10.1,
      name: 'Jorge Johnson',
      place: 'SM MOA',
      timein: '45659',
      timeout: '43549',
      controlNo: 'CA-8234-373',
    });


    this.afs.collection('mockDataActions').add({
      vulnerability: 9.5,
      name: 'Rosemary Galler',
      place: 'SM MOA',
      timein: '43659',
      timeout: '46549',
      controlNo: 'CA-7476-595',
    });

    this.afs.collection('mockDataActions').add({
      vulnerability: 9.5,
      name: 'Rosemary Galler',
      place: 'Tarlac Public Market',
      timein: '30659',
      timeout: '38549',
      controlNo: 'CA-7476-595',
    });

    this.afs.collection('mockDataActions').add({
      vulnerability: 21.7,
      name: 'Faith James',
      place: 'Tarlac Public Market',
      timein: '35659',
      timeout: '41549',
      controlNo: 'CA-7476-595',
    });

    this.afs.collection('mockDataActions').add({
      vulnerability: 21.7,
      name: 'Faith James',
      place: 'SM MOA',
      timein: '38659',
      timeout: '39549',
      controlNo: 'CA-6693-461',
    });

    this.afs.collection('mockDataActions').add({
      vulnerability: 21.7,
      name: 'Faith James',
      place: 'Luzon Pharmacy',
      timein: '35659',
      timeout: '36549',
      controlNo: 'CA-6693-461',
    });


    this.afs.collection('mockDataActions').add({
      vulnerability: 7.3,
      name: 'Rebecca Green',
      place: 'Luzon Pharmacy',
      timein: '32659',
      timeout: '35549',
      controlNo: 'CA-3706-644',
    });

    this.afs.collection('mockDataActions').add({
      vulnerability: 51.8,
      name: 'Joy Bing',
      place: 'Luzon Pharmacy',
      timein: '34659',
      timeout: '38549',
      controlNo: 'CA-5073-340',
    });





    /*




   
  



    console.log( full, age, address,  address2[Math.floor(Math.random() * (1 - 30 + 1) + 30)], phoneNumber, medicalConditionCheck, gender[genderControl] , controlFinal, vulnerability)





       this.afs.collection('mockData').add({
      name: full,
      contact: phoneNumber,
      sex: gender[genderControl],
      age: age.toString(),
      controlNo: controlFinal,
      address: addressF,
      medicalCondition: [medicalConditionsList[randomizer]]
    });



     this.afs.collection('mockDataActions').add({
      place: 'Luzon Pharmacy',
      timein: '42659',
      timeout: '43649',
      controlNo: 'CA-2220-434',
    });





    let fname = faker.name.firstName()

    let lname = faker.name.lastName()

    let age = Math.floor(Math.random() * (20 - 88 + 1) + 88);

    let address = faker.address.state()

    let address2 = faker.address.states()

    let addressF = address + " " + address2[Math.floor(Math.random() * (1 - 30 + 1) + 30)]


    let phoneNumber = faker.phone.phoneNumber()

    let genderControl = Math.round(Math.random());

    let gender = ['Male', 'Female'];

    let randomizer = Math.floor(Math.random() * (16 - 1 + 1) + 1);

    let medicalConditionsList = ['Obesity', 'Chronic metabolic disease', 'Diabetes mellitus', 'Chronic lung disease', 'Asthma',
      'Chronic obstructive pulmonary disease', 'Cardiovascular disease', 'Coronary artery disease', 'Congestive heart failure', 'Renal disease',
      'Immunosuppressive condition', 'Blood disorder', 'Rheumatologic/Autoimmune disease', 'Pregnancy', 'Neurologic disease', 'Gastrointestinal/Liver disease'];

    let control1 = Math.floor(Math.random() * (1256 - 8546 + 1) + 8546);
    let control2 = Math.floor(Math.random() * (125 - 854 + 1) + 854);
    let controlFinal = "CA" + "-" + control1 + "-" + control2

    let full = fname + " " + lname;

    //console.log( full, age, address,  address2[], phoneNumber, gender[genderControl] , controlFinal)
    // console.log( full, age, address,  address2[Math.floor(Math.random() * (1 - 30 + 1) + 30)], phoneNumber, gender[genderControl] , controlFinal)


    let vulnerability = 0
    let vulnerabilityData = 0


    let medicalConditionCheck =  medicalConditionsList[randomizer]
    
    let genderCheck = gender[genderControl]
   

    if (age >= 18 && age <= 49) {
     
        if (medicalConditionCheck == "Hypertension") {
          vulnerability = 17.5
        } else if (medicalConditionCheck == "Obesity") {
          vulnerability = 59.0
        } else if (medicalConditionCheck == "Chronic metabolic disease") {
          vulnerability = 21.7
        } else if (medicalConditionCheck == "Diabetes mellitus") {
          vulnerability = 19.6
        } else if (medicalConditionCheck == "Chronic lung disease") {
          vulnerability = 36.4
        } else if (medicalConditionCheck == "Asthma") {
          vulnerability = 27.3
        } else if (medicalConditionCheck == "Chronic obstructive pulmonary disease") {
          vulnerability = 0.0
        } else if (medicalConditionCheck == "Cardiovascular disease") {
          vulnerability = 4.7
        } else if (medicalConditionCheck == "Coronary artery disease") {
          vulnerability = 0.0
        } else if (medicalConditionCheck == "Congestive heart failure") {
          vulnerability = 4.7
        } else if (medicalConditionCheck == "Neurologic disease") {
          vulnerability = 9.5
        } else if (medicalConditionCheck == "Renal disease") {
          vulnerability = 7.3
        } else if (medicalConditionCheck == "Immunosuppressive condition") {
          vulnerability = 11.6
        } else if (medicalConditionCheck == "Gastrointestinal/Liver disease") {
          vulnerability = 9.5
        } else if (medicalConditionCheck == "Blood disorder") {
          vulnerability = 2.3
        } else if (medicalConditionCheck == "Rheumatologic/Autoimmune disease") {
          vulnerability = 2.4
        } else if (medicalConditionCheck == "Pregnancy") {
          vulnerability = 9.1
        }
    
    
    } else if (age >= 50 && age <= 64) {
     
        if (medicalConditionCheck == "Hypertension") {
          vulnerability = 47.7
        } else if (medicalConditionCheck == "Obesity") {
          vulnerability = 49.0
        } else if (medicalConditionCheck == "Chronic metabolic disease") {
          vulnerability = 37.0
        } else if (medicalConditionCheck == "Diabetes mellitus") {
          vulnerability = 32.1
        } else if (medicalConditionCheck == "Chronic lung disease") {
          vulnerability = 28.3
        } else if (medicalConditionCheck == "Asthma") {
          vulnerability = 13.2
        } else if (medicalConditionCheck == "Chronic obstructive pulmonary disease") {
          vulnerability = 5.7
        } else if (medicalConditionCheck == "Cardiovascular disease") {
          vulnerability = 19.6
        } else if (medicalConditionCheck == "Coronary artery disease") {
          vulnerability = 12.5
        } else if (medicalConditionCheck == "Congestive heart failure") {
          vulnerability = 5.4
        } else if (medicalConditionCheck == "Neurologic disease") {
          vulnerability = 7.3
        } else if (medicalConditionCheck == "Renal disease") {
          vulnerability = 3.8
        } else if (medicalConditionCheck == "Immunosuppressive condition") {
          vulnerability = 7.4
        } else if (medicalConditionCheck == "Gastrointestinal/Liver disease") {
          vulnerability = 0.0
        } else if (medicalConditionCheck == "Blood disorder") {
          vulnerability = 1.8
        } else if (medicalConditionCheck == "Rheumatologic/Autoimmune disease") {
          vulnerability = 0.0
        } else if (medicalConditionCheck == "Pregnancy") {
          vulnerability = 9.1
        }
      
     
      
    } else if (age >= 65) {
     
        if (medicalConditionCheck == "Hypertension") {
          vulnerability = 72.6
        } else if (medicalConditionCheck == "Obesity") {
          vulnerability = 41.0
        } else if (medicalConditionCheck == "Chronic metabolic disease") {
          vulnerability = 45.3
        } else if (medicalConditionCheck == "Diabetes mellitus") {
          vulnerability = 31.3
        } else if (medicalConditionCheck == "Chronic lung disease") {
          vulnerability = 38.7
        } else if (medicalConditionCheck == "Asthma") {
          vulnerability = 12.9
        } else if (medicalConditionCheck == "Chronic obstructive pulmonary disease") {
          vulnerability = 22.6
        } else if (medicalConditionCheck == "Cardiovascular disease") {
          vulnerability = 50.8
        } else if (medicalConditionCheck == "Coronary artery disease") {
          vulnerability = 25.4
        } else if (medicalConditionCheck == "Congestive heart failure") {
          vulnerability = 9.5
        } else if (medicalConditionCheck == "Neurologic disease") {
          vulnerability = 23.3
        } else if (medicalConditionCheck == "Renal disease") {
          vulnerability = 25.4
        } else if (medicalConditionCheck == "Immunosuppressive condition") {
          vulnerability = 10.2
        } else if (medicalConditionCheck == "Gastrointestinal/Liver disease") {
          vulnerability = 10.7
        } else if (medicalConditionCheck == "Blood disorder") {
          vulnerability = 12.1
        } else if (medicalConditionCheck == "Rheumatologic/Autoimmune disease") {
          vulnerability = 3.4
        } else if (medicalConditionCheck == "Pregnancy") {
          vulnerability = 0.0
        }

  
    }


    if (genderCheck == "Male" ) {
      vulnerability = vulnerability + 1
    } else {
      vulnerability = vulnerability + 0
    }

  

    console.log( full, age, address,  address2[Math.floor(Math.random() * (1 - 30 + 1) + 30)], phoneNumber, medicalConditionCheck, gender[genderControl] , controlFinal, vulnerability)


      
    this.afs.collection('mockData').add({
      name: full,
      contact: phoneNumber,
      gender: gender[genderControl],
      age: age.toString(),
      controlNo: controlFinal,
      address: addressF,
      vulnerability: vulnerability,
      medicalCondition: [medicalConditionsList[randomizer]]
    });



    
    
    */
  }


  searchUser(value) {

    console.log(value)

    //this.afs.collection('mockData').valueChanges()


  }

}

function test(data) {

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

        firebase.firestore().collection('mockDataActions').where('controlNo', '==', value.controlNO)
      .get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());

        });
      })



    const document = this.afs.collection('mockDataActions', ref => ref.where('controlNo', '==', value.controlNO))
    let actions = await document.get()
    let response = actions.subscribe(val =>)

    console.log(response)





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

