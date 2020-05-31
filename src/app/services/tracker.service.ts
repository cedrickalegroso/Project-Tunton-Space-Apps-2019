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



}

   
  

