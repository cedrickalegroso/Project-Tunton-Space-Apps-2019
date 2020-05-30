import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'mobile',
    component: MobileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
