import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, PopoverController, AlertController } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import { DataProvider } from '../../providers/data/data';
import { HomePage } from '../../pages/home/home';
import { CurrentplayingPage } from '../../pages/currentplaying/currentplaying';
import { MusicPage } from '../../pages/music/music';

@IonicPage()
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
})
export class PlaylistPage {

    list: any = [{ image: 'assets/imgs/playlist/1.jpg', songs:7, name: 'Recently Played' },
        { image: 'assets/imgs/playlist/2.jpg', songs: 11, name: 'Recently Added' },
        { image: 'assets/imgs/playlist/3.jpg', songs: 9, name: 'Most Played' },
        { image: 'assets/imgs/playlist/4.jpg', songs: 6, name: 'Ringtone' }
    ]

    playList: any = [{ icon: 'checkmark-circle', songs:7, name: 'Default List' },
        { icon: 'thumbs-up', songs: 11, name: 'All Time Favourite' },
        { icon: 'snow', songs: 9, name: 'Christmas Songs' },
        { icon: 'flame', songs: 6, name: 'Top 10 Pop Tracks' }
    ]
    animateList: any = [];
    animatePlayList: any = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {

    }

    ionViewDidLoad() {
        let that = this;
            for (let i = 0; i < this.list.length; i++) {
                setTimeout(function() {
                    that.animateList.push(that.list[i]);
                }, 200 * i);
            }
    }

    openList(item){
        this.navCtrl.push(MusicPage, {title: "Playlist - "+item.name, item: item})
    }

    nowPlaying() {
        this.navCtrl.push(CurrentplayingPage)
    }

}
