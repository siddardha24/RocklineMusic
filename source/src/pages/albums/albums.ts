import { Component, NgModule, trigger, state, style, transition, animate, keyframes, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams ,PopoverController, Loading, LoadingController, Platform} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { HomePage } from '../../pages/home/home';
import { CurrentplayingPage } from '../../pages/currentplaying/currentplaying';
import { MusicPage } from '../../pages/music/music';

@IonicPage()
@Component({
  selector: 'page-albums',
  templateUrl: 'albums.html',
})
export class AlbumsPage {
 item :any=[]
    animateItems = [];
    animateClass: any;
    loader: Loading;
    data: any="fgfgfg";
  constructor(public navCtrl: NavController, public platform: Platform, public navParams: NavParams, private dataProvider: DataProvider,public popoverCtrl: PopoverController, public loadingController: LoadingController) {
        this.animateClass = { 'zoom-in': true };

  }

  ionViewDidLoad() {    
           let that = this;
      that.dataProvider.getAlbums().subscribe(function(res){
        console.log(res);
        for (let i = 0; i < res['length']; i++) {
          res[i].img = "assets/imgs/albums/"+res[i].img
            setTimeout(function() {
               that.animateItems.push(res[i]);
            }, 200 * i);
        }
      });
    }

openAlbum(item){
  this.navCtrl.push(MusicPage, {title: "Album -Tracks", item: item})
}

nowPlaying(){
  this.navCtrl.push(CurrentplayingPage)
}
}
