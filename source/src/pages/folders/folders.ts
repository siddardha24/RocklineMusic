import { Component, NgModule, trigger, state, style, transition, animate, keyframes, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { MusicPage } from '../../pages/music/music';
import { CurrentplayingPage } from '../../pages/currentplaying/currentplaying';

@IonicPage()
@Component({
  selector: 'page-folders',
  templateUrl: 'folders.html',
})
export class FoldersPage {
 myInput: any = '';
    item: any = []
    animateItems = [];
    animateClass: any;
    list: any = [{ image: 'assets/imgs/folders/1.jpg', songs: 3, name: 'DCIM' },
        { image: 'assets/imgs/folders/2.jpg', songs: 12, name: 'Download' },
        { image: 'assets/imgs/folders/3.jpg', songs: 8, name: 'WhatsApp Audio' },
        { image: 'assets/imgs/folders/4.jpg', songs: 22, name: 'Bluetooth' },
        { image: 'assets/imgs/folders/5.jpg', songs: 11, name: 'Ringtones' },
    ]

    constructor(public navCtrl: NavController, private dataProvider: DataProvider, public navParams: NavParams, public popoverCtrl: PopoverController) {
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

    nowPlaying() {
        this.navCtrl.push(CurrentplayingPage)
    }
    
    openMusic(item) {
        this.navCtrl.push(MusicPage, {title: "Folders - "+item.name, item: item})
    }

}
