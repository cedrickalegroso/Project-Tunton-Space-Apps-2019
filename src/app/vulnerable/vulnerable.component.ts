import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import * as firebase from 'firebase/app';


// HTTP CLIENT
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vulnerable',
  templateUrl: './vulnerable.component.html',
  styleUrls: ['./vulnerable.component.scss']
})
export class VulnerableComponent implements OnInit {

  vulnerablePips: Array<any>;

  placeImage2;

  count;
  place;

  constructor(
    public dialogRef: MatDialogRef<VulnerableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,   private http: HttpClient) { }
  ngOnInit(): void {
    //console.log(this.data)
   
    let data = this.data

    this.place = data[0].place
    this.count = data.length


    

    this.getImage(data)
  }




  async getImage(data){
    

   
    console.log(data[0].place)


    if (data[0].place === "Bacoor") {
      console.log('using bacoor')
     
      this.http.get('https://api.nasa.gov/planetary/earth/imagery?lon=120.9663629&lat=14.4314357&date=2019-01-01&dim=0.15&api_key=', { responseType: 'blob' }).subscribe(result => {
        console.log(result);
        return this.createImageFromBlob(result);
      });

      
    } else if (data[0].place === "SM MOA") {
      console.log('using moa')
    this.http.get('https://api.nasa.gov/planetary/earth/imagery?lon=120.9827649&lat=14.5364266&date=2019-01-01&dim=0.15&api_key=', { responseType: 'blob' }).subscribe(result => {
      console.log(result);
      return this.createImageFromBlob(result);
    });


    } else if (data[0].place === "Luzon Public Market") {
      console.log('using public market')
     
      this.http.get('https://api.nasa.gov/planetary/earth/imagery?lon=120.97&lat=14.59&date=2019-01-01&dim=0.15&api_key=', { responseType: 'blob' }).subscribe(result => {
        console.log(result);
        return this.createImageFromBlob(result);
      });
    }


 

   
  }


  createImageFromBlob(result) {
    let reader = new FileReader();
    reader.addEventListener("load",
      () => {
          this.placeImage2 = reader.result;
      },
      false);

    if (result) {
      if (result.type !== "application/pdf")
        reader.readAsDataURL(result);
    }
  }



}
