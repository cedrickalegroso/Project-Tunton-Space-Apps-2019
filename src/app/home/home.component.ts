import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';


import { TrackerService } from '../services/tracker.service'


import { Trace } from '../services/trace.model'

import * as firebase from 'firebase/app';
// misc

import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  searchFormGroup: FormGroup;

  isHiddenDash = false;
  isHiddenTrace = true;

  

  people: AngularFirestoreCollection<Trace>;
  people$: Observable<Trace[]>

  constructor(
    private _formBuilder: FormBuilder,
    public trace$: TrackerService,
    private router: Router,
    private afs: AngularFirestore,
  ) {

   

  }

  ngOnInit(): void {

    this.searchFormGroup = this._formBuilder.group({
      controlNO: ['', Validators.required],
    });



  }





  async searchUser(value) {
    // console.log(value.controlNO)
    
   
    this.people = this.afs.collection('mockData', ref => ref.where('controlNo', '==', value.controlNO).limit(1))
    this.people$ = this.people.valueChanges();

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
    this.trace$.addDataMock();
    console.log('populated')
  }



}
