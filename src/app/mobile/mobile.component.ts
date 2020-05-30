import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  openProfileDialog(): void {
    const dialogRef = this.dialog.open(activeControl, {
      width: '400px',
      height: '600px'
    });


  }

}



@Component({
  selector: 'app-servicedashboard',
  templateUrl: 'activate.html',
})
export class activeControl {


  constructor(
    public dialog: MatDialog,
    private _formBuilder: FormBuilder,
  ) {

  }

  ngOnInit() {

 

  }




}
