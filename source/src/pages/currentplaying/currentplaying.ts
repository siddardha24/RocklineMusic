import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { DataProvider } from '../../providers/data/data';
import { Media, MediaObject} from '@ionic-native/media';
import { NativeAudio } from '@ionic-native/native-audio';
import { AudioProvider } from 'ionic-audio';

@IonicPage()
@Component({
  selector: 'page-currentplaying',
  templateUrl: 'currentplaying.html',
})
export class CurrentplayingPage {
 item: any;
 jsonData = null;
    trackName: any;
    url: any;
    playing: any;
    curr_playing_file: any;
    songMedia: MediaObject = null;
    audioTrack: any;

    constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider, private nativeAudio: NativeAudio, private media: Media, private audio:AudioProvider) {

        let that = this;

        // this.item = this.navParams.get('item')
        // if (!this.item) {
        //     this.item = this.dataProvider.getCurrentSong();
        //     console.log(this.item);
        //     if (!this.item) {
        //         this.item = { name: 'Not Playing' };
        //     }
        // }
        this.jsonData = JSON.parse(this.navParams.get("jsonData"));
        this.trackName = this.jsonData.trackName;
        console.log(this.trackName);
    }
    
    play(track){
        console.log(track);
        // for(let checkTrack of track)
        // {
        //     if(checkTrack.playing){
        //         this.pause(checkTrack)
        //     }
        //     else{
        //         console.log(track.albumName);
        //         console.log(track.trackUrl);
        //         this.nativeAudio.preloadSimple(track.albumName, track.trackUrl);
        //         this.nativeAudio.play(track.albumName);
        //     }
        // }
        if(this.playing){
            this.pause(track);
        }
        else{
            console.log(track.albumName);
            console.log(track.trackUrl);
            this.nativeAudio.preloadSimple(track.trackName, track.trackUrl).then(() => {
                this.nativeAudio.play(track.trackName);
            }).catch((err) => {
              console.log(err);
            });
           
        }
        this.playing = !this.playing;
    }

    pause(track) {
        if(this.playing){
            this.nativeAudio.stop(track.trackName);
            // this.audio.pause(track.trackUrl);// 
        }
        else{
            console.log(track.albumName);
            console.log(track.trackUrl);
        }
        this.playing = !this.playing;
    }

    changeVolume(volume) {

    }
}
