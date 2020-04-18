import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrentplayingPage } from './currentplaying';
@NgModule({
  declarations: [
    CurrentplayingPage,
  ],
  imports: [
    IonicPageModule.forChild(CurrentplayingPage),
  ],
})

export class CurrentplayingPageModule {}