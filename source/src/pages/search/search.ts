import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Http } from '@angular/http';
import { NativeAudio } from '@ionic-native/native-audio';
import { SpeechRecognition, SpeechRecognitionListeningOptionsAndroid } from '@ionic-native/speech-recognition';
import { Observable } from 'rxjs/Rx';
import { Media, MediaObject } from '@ionic-native/media';
import { CurrentplayingPage } from '../currentplaying/currentplaying';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { concat } from 'rxjs/observable/concat';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  androidoptions: SpeechRecognitionListeningOptionsAndroid;
  hasMatch: boolean;
  speechList: Array<string> =[];
  songs: any;
  animateItems = [];
    animateClass: any;
  posts: any;
  apiUrl: any = 'http://ec2-3-15-173-22.us-east-2.compute.amazonaws.com:8080/showSongs/';
  public res: any;
  public items: any;
  suggestion: any;
  data0: any;
  result0: any;
  result1: any;
  result2: any;
  result3: any;
  result4: any;
  result: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider, private speech: SpeechRecognition, public http: Http, private nativeAudio: NativeAudio,private media: Media) {

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

    listenForSpeech():void{
      this.androidoptions = { prompt: 'Search for a Song'}
      this.speech.startListening(this.androidoptions).subscribe((data)=>{
      this.speechList = data;
      console.log(this.speechList);
      this.loadData(this.speechList);
      // this.loadData(this.speechList).subscribe(
      //   result =>{
      //     this.items = result;
      //     console.log(this.items);
      //   }
      // );
      //this.hasMatch = false;
      for(let suggestion of this.speechList){
      // this.hasMatch = this.hasMatch || suggestion.toLowerCase() === 'play song';
        // suggestion=suggestion.toLowerCase();
        // suggestion=suggestion.replace('play','');
        console.log(suggestion);
        //this.loadData(suggestion);
        // this.http.get(this.apiUrl).map(res => res.json()).subscribe(res =>{
        //   this.items = res;
        //   console.log(res);
        // });
       }
      // this.dataProvider.songSearch(this.speechList).subscribe(function(res){
      //   console.log(res);
      //   this.animateItems.push(res);
      // });
    })

}
    loadData(speechList){
      let data:Observable<any>
      let data1:Observable<any>
      let data2:Observable<any>
      let data3:Observable<any>
      let data4:Observable<any>
      console.log(speechList[0]);
    //   for(let suggestion of this.speechList){
    //   data = this.http.get(this.apiUrl+ suggestion).map(res => res.json());
    //   data.subscribe(result => {
    //       this.items = [].concat(result[0], result[1], result[2], result[3], result[4], result[5]);
    //       //this.items = result;
    //       console.log(this.items);
    //   })
    // }
    data = this.http.get(this.apiUrl+ speechList[0]).map(res => res.json());
    data1 = this.http.get(this.apiUrl+ speechList[1]).map(res => res.json());
    data2 = this.http.get(this.apiUrl+ speechList[2]).map(res => res.json());
    data3 = this.http.get(this.apiUrl+ speechList[3]).map(res => res.json());
    data4 = this.http.get(this.apiUrl+ speechList[4]).map(res => res.json());
    forkJoin([data, data1, data2, data3, data4]).subscribe(result =>{
      this.items = [].concat(result[0], result[1], result[2], result[3], result[4]);
      console.log(this.items);
    })
  }
    playSong(item){
      console.log(item);
      let jsonData = JSON.stringify(item);
      this.navCtrl.push(CurrentplayingPage, {jsonData : jsonData});
      // this.nativeAudio.preloadSimple(id, url);
      // this.nativeAudio.play(id);
    }
}