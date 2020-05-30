import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators'

import { PersonService } from '../services/person.service'

import { Person } from '../services/person.model'



@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  searchFormGroup: FormGroup;

  login: FormGroup;

  medicalCondition = new FormControl();

  medicalConditionsList: string[] = ['Cardiovascular disease', 'Diabetes', 'Chronic respiratory disease', 'Hypertension', 'no pre-existing conditions'];


  persons$: AngularFirestoreCollection<Person>;
  person$: Observable<Person[]>



  isHiddenLogin = false;
  isHiddenRegister = true;


  constructor(
    public dialog: MatDialog,
    private _formBuilder: FormBuilder,
    public person: PersonService,
    private afs: AngularFirestore,
  ) { }

  ngOnInit(): void {


    this.searchFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required],
      medicalCondition: ['', Validators.required],
      sex: ['', Validators.required],
      age: ['', Validators.required],
      controlNo: ['', Validators.required],
      contact: ['', Validators.required],
    });

    this.login = this._formBuilder.group({
      controlNo: ['', Validators.required],
    });
  }

  openProfileDialog(): void {
    const dialogRef = this.dialog.open(activeControl, {
      width: '400px',
      height: '600px'
    });
  }

  register(value) {
    console.log(value)

    this.person.registerUserAuthentication(value)
    //this.searchUser(value)

    setTimeout(function(){ 
      this.showLogin()
    }, 1500);
    
  }


  async showLogin() {
    this.isHiddenLogin = false;
    this.isHiddenRegister = true;
  }


  async showRegister() {
    this.isHiddenRegister = false;
    this.isHiddenLogin = true;
  }



  async loginuser(value) {
    // console.log(value.controlNO)
    
   
    this.persons$ = this.afs.collection('mockData', ref => ref.where('controlNo', '==', value.controlNo).limit(1))
    this.person$ = this.persons$.valueChanges();

  }

}



@Component({
  selector: 'app-mobile',
  templateUrl: 'activate.html',
})
export class activeControl {

  registerForm: FormGroup;

  constructor(
    public dialog: MatDialog,
    private _formBuilder: FormBuilder,
  ) {

  }

  ngOnInit() {



    this.registerForm = this._formBuilder.group({
      displayName: ['', Validators.required],
    });


  }

  register(value) {
    console.log(value)
  }




}
