import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {environment} from '../environments/environment'



/* Angular */
import { ReactiveFormsModule } from '@angular/forms';

/*Material*/
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';


//Angular FIre
import * as firebase from 'firebase/app';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { MobileComponent, activeControl } from './mobile/mobile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatMenuModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule
  ],
  entryComponents: [activeControl],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
