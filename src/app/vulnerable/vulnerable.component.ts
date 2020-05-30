import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-vulnerable',
  templateUrl: './vulnerable.component.html',
  styleUrls: ['./vulnerable.component.scss']
})
export class VulnerableComponent implements OnInit {

  vulnerablePips: Array<any>;

  constructor(
    public dialogRef: MatDialogRef<VulnerableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {
    //console.log(this.data)
   
    let data = this.data
    
    this.initialize(data)
  }


  async initialize(data) {

      
    console.log(data.length)

  }





}
