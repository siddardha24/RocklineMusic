import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { CurrentplayingPage } from '../../pages/currentplaying/currentplaying';
import { MusicPage } from '../../pages/music/music';

@IonicPage()
@Component({
  selector: 'page-artists',
  templateUrl: 'artists.html',
})
export class ArtistsPage {
item :any=[]
animateItems = [];
    animateClass: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider,public popoverCtrl: PopoverController) {
 this.animateClass = { 'zoom-in': true };
  }

   ionViewDidLoad() {    
         let that = this;
      that.dataProvider.getArtists().subscribe(function(res){
        for (let i = 0; i < res.length; i++) {
            setTimeout(function() {
               that.animateItems.push(res[i]);
            }, 200 * i);
        }
      });
    }
    
    openMusic(item) {
        this.navCtrl.push(MusicPage, {title: "Artist - "+item.name, item: item})
    }

    nowPlaying(){
    this.navCtrl.push(CurrentplayingPage)
  }

}
