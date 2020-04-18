import { Component, NgModule, trigger, state, style, transition, animate, keyframes, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, Platform, Loading, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { HomePage } from '../../pages/home/home';
import { CurrentplayingPage } from '../../pages/currentplaying/currentplaying';

@IonicPage()
@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})
export class MusicPage {
item: any = []
    animateItems = [];
    animateClass: any;
    title: any;
    loader: Loading;

    constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider, public platform: Platform, public loadingController: LoadingController) {
        this.title = navParams.get('title')
        let that = this;
            let songs = this.dataProvider.getSongs();

        if (this.title == "Album -Tracks") {
            let item = navParams.get('item')
            console.log(item);

                for (let i = 0; i < item.songList.length; i++) {
                	item.songList[i].image = item.img
                    setTimeout(function() {
                       that.animateItems.push(item.songList[i]);
                    }, 200 * i);
                }  

        }

        if (this.title == "Latest Music") {

            console.log(songs);
                for (let i = 0; i < songs.length; i++) {
                    setTimeout(function() {
                       that.animateItems.push(songs[i]);
                    }, 200 * i);
                }          

        }

        if (this.title.indexOf('Folders') > -1) {

            let item = navParams.get('item')
            console.log(songs);
                for (let i = 0; i < item.songs; i++) {
                    setTimeout(function() {
                       that.animateItems.push(songs[i]);
                    }, 200 * i);
                }   

        }

        if (this.title.indexOf('Genre') > -1) {

            let item = navParams.get('item')
            console.log(songs);
                for (let i = 0; i < item.songs; i++) {
                    setTimeout(function() {
                       that.animateItems.push(songs[i]);
                    }, 200 * i);
                }   

        }

        if (this.title.indexOf('Playlist') > -1) {

            let item = navParams.get('item')
            console.log(songs);
                for (let i = 0; i < item.songs; i++) {
                    setTimeout(function() {
                       that.animateItems.push(songs[i]);
                    }, 200 * i);
                }   

        }

        if (this.title.indexOf('Artist') > -1) {

            let item = navParams.get('item')
            console.log(songs);
                for (let i = 0; i < item.songs; i++) {
                    setTimeout(function() {
                       that.animateItems.push(songs[i]);
                    }, 200 * i);
                }   

        }

        if (this.navParams.get('count')) {

            console.log(songs);
            for (let i = 0; i < this.navParams.get('count'); i++) {
                setTimeout(function() {
                    that.animateItems.push(songs[i]);
                }, 200 * i);
            }

        }
        this.animateClass = { 'zoom-in': true };
    }


    shuffle(arra1) {
        var ctr = arra1.length,
            temp, index;

        // While there are elements in the array
        while (ctr > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * ctr);
            // Decrease ctr by 1
            ctr--;
            // And swap the last element with it
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    }

    currentPlaying(item) {
		this.navCtrl.push(CurrentplayingPage, { item: item })
    }

    nowPlaying() {
        this.navCtrl.push(CurrentplayingPage)
    }
}
