import { Component } from '@angular/core';
import { IonicPage,NavController,AlertController } from 'ionic-angular';
import { PlaylistPage } from '../../pages/playlist/playlist';
import { AlbumsPage } from '../../pages/albums/albums';
import { ArtistsPage } from '../../pages/artists/artists';
import { GenresPage } from '../../pages/genres/genres';
import { FoldersPage } from '../../pages/folders/folders';
import { MusicPage } from '../../pages/music/music';
import { SearchPage } from '../../pages/search/search';
import { CurrentplayingPage } from '../../pages/currentplaying/currentplaying';
import { DataProvider } from '../../providers/data/data';
import { HttpModule } from '@angular/http';
import { SpeechRecognition, SpeechRecognitionListeningOptionsAndroid } from '@ionic-native/speech-recognition';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  androidoptions: SpeechRecognitionListeningOptionsAndroid;
  hasMatch: boolean;
  speechList: Array<string> =[];
  constructor(public navCtrl: NavController,public alertCtrl: AlertController, private speech: SpeechRecognition, private dataProvider: DataProvider) {

  }
  ngOnInit() {

    this.speech.hasPermission()
      .then((hasPermission: boolean) => {

        if (!hasPermission) {
        this.speech.requestPermission()
          .then(
            () => console.log('Granted'),
            () => console.log('Denied')
          )
        }

     });

  }
   doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Create a new playlist',
      inputs: [
        {
          name: 'New list 1',
          placeholder: 'New list 1'
        },
      ],
      buttons: [
        {
          text: 'CANCEL',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  allMusic(){
  	this.navCtrl.push(MusicPage, {title: "Latest Music"})
  }
  search(){
    this.navCtrl.push(SearchPage)
  }
  albums(){
  	this.navCtrl.push(AlbumsPage)
  }
    artists(){
  	this.navCtrl.push(ArtistsPage)
  }
    genres(){
  	this.navCtrl.push(GenresPage)
  }
    folders(){
  	this.navCtrl.push(FoldersPage)
  }
    playlist(){
  	this.navCtrl.push(PlaylistPage)
  }
    favourite(){
  	this.navCtrl.push(MusicPage, {title: "Favourite", count: 5})
  }
    recentPlay(){
  	this.navCtrl.push(MusicPage, {title: "Recent Play", count: 8})
  }
    recentAdd(){
  	this.navCtrl.push(MusicPage, {title: "Recent Add", count: 4})
  }
    mostPlay(){
  	this.navCtrl.push(MusicPage, {title: "Most Play", count: 11})
  }
    ringtone(){
  	this.navCtrl.push(MusicPage, {title: "Ringtone", count: 7})
  }
  
    nowPlaying(){
  	this.navCtrl.push(CurrentplayingPage)
  }
  

}
