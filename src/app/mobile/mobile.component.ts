import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  searchFormGroup: FormGroup;

  medicalCondition = new FormControl();

  medicalConditionsList: string[] = ['Cardiovascular disease', 'Diabetes', 'Chronic respiratory disease', 'Hypertension', 'no pre-existing conditions'];

  constructor(
    public dialog: MatDialog,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {


    this.searchFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      prevdis: ['', Validators.required],
      sex: ['', Validators.required],
      age: ['', Validators.required],
      controlNo: ['', Validators.required],
      contact: ['', Validators.required],
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
