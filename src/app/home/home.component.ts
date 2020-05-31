import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';


import { VulnerableComponent } from '../vulnerable/vulnerable.component';


// HTTP CLIENT
import { HttpClient } from '@angular/common/http';


import { TrackerService } from '../services/tracker.service'

// models
import { Action } from '../services/action.model'
import { Trace } from '../services/trace.model'
import { Person } from '../services/person.model'

import * as firebase from 'firebase/app';



// misc
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { map, filter, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  searchFormGroup: FormGroup;

  isHiddenDash = true;
  isHiddenTrace = false;


  data1;

  placeImage;

  prop;

  people: AngularFirestoreCollection<Trace>;
  people$: Observable<Trace[]>


  actionCollection: AngularFirestoreCollection<Action>;
  action$: Observable<Action[]>

  chartTimein: any;
  chartTimeout: any;
  possibleCount: any;
  tracedPeople: any;

  constructor(
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    public trace$: TrackerService,
    private router: Router,
    private afs: AngularFirestore,
    private http: HttpClient
  ) {



  }

  ngOnInit(): void {

    this.searchFormGroup = this._formBuilder.group({
      controlNO: ['', Validators.required],
    });




  }





  openProfileDialog(): void {
    const dialogRef = this.dialog.open(VulnerableComponent, {
      width: '1200px',
      height: '600px',
      data: this.tracedPeople
    });
  }


  async searchUser(value) {
    // console.log(value.controlNO)


    this.people = this.afs.collection('mockData', ref => ref.where('controlNo', '==', value.controlNO).limit(1))
    this.people$ = this.people.valueChanges();


    this.actionCollection = this.afs.collection('mockDataActions', ref => ref.where('controlNo', '==', value.controlNO))
    this.action$ = this.actionCollection.valueChanges();

    let test1;


    const result1 = await this.getaction(value).then(
      result1 => test1 = result1
    )

    let timeTemp = test1.timein;




    console.log(this.chartTimein)

    this.chartTimeout = test1.timeout



    const result2 = await this.getactionPersonCount(test1)


    let querydata = await result2

    console.log('query' + querydata[0].place)

     this.possibleCount = querydata.length

    this.tracedPeople = querydata


    console.log('traced' + this.tracedPeople)


    this.prop = "GGBABY"

  }


  async getaction(value) {


    const document = firebase.firestore().collection('mockDataActions')
      .where('controlNo', '==', value.controlNO)
    let ticket = await document.get()
    let response = ticket.docs.map(doc => doc.data());
    //console.log(response)
    return response


  }



  async getactionPersonCount(test1) {



    console.log(test1.length)

    for (let x = 0; x <= test1.length - 1; x++) {

      const document = firebase.firestore().collection('mockDataActions')
     
        .where('place', '==', test1[x].place)
        .where('timein', '>=', test1[x].timein)
        

      let ticket = await document.get()
      let response = ticket.docs.map(doc => doc.data());
     // console.log(response)
     return response


    }


  

  }







  async showCount() {
    this.isHiddenDash = false;
    this.isHiddenTrace = true;
  }


  async showTracer() {
    this.isHiddenTrace = false;
    this.isHiddenDash = true;
  }

  async populateMockData() {
    //this.trace$.addDataMock();
    //console.log('populated')
  }




}




/*

sample may 5 ka tawo nga upod ko sa mall that time

person 1 : Female, 24, Cardiovascular disease  <--- VULNERALE

person 2 : Female, 20, No medical conditions

person 3 : Male, 34, No medical conditions

person 4 : Male, 48, Chronic respiratory disease <--- VULNERALE

person 5 : Female, 36, No medical conditions


*/