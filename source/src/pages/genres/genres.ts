import { Component, NgModule, trigger, state, style, transition, animate, keyframes, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams ,PopoverController, Loading, LoadingController, Platform} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { CurrentplayingPage } from '../../pages/currentplaying/currentplaying';
import { MusicPage } from '../../pages/music/music';

@IonicPage()
@Component({
  selector: 'page-genres',
  templateUrl: 'genres.html',
})
export class GenresPage {
 animateItems = [];
    animateClass: any;
    list: any = [
        { image: 'assets/imgs/genres/1.jpg', songs: 12, name: 'Classical' },
        { image: 'assets/imgs/genres/2.jpg', songs: 6, name: 'Folk' },
        { image: 'assets/imgs/genres/3.jpg', songs: 8, name: 'Pop' },
        { image: 'assets/imgs/genres/4.jpg', songs: 22, name: 'Jazz' },
        { image: 'assets/imgs/genres/5.jpg', songs: 11, name: 'Hip-Hop' },
        { image: 'assets/imgs/genres/6.jpg', songs: 0, name: 'Rap' },
    ]

  constructor(public navCtrl: NavController, public platform: Platform, public navParams: NavParams, private dataProvider: DataProvider,public popoverCtrl: PopoverController, public loadingController: LoadingController) {
        this.animateClass = { 'zoom-in': true };

  }

    ionViewDidLoad() {
        let that = this;
            for (let i = 0; i < this.list.length; i++) {
                setTimeout(function() {
                    that.animateItems.push(that.list[i]);
                }, 200 * i);
            }
    }

    openMusic(item) {
        this.navCtrl.push(MusicPage, {title: "Genre - "+item.name, item: item})
    }

nowPlaying(){
  this.navCtrl.push(CurrentplayingPage)
}

}
