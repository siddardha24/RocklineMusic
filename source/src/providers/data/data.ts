import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as cheerio from 'cheerio';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataProvider {

	items: any;
  allSongs: any = [];
  allAlbums: any= [];
  currentSong: any = {};
  posts: any;
  apiUrl: any = 'http://ec2-18-218-40-169.us-east-2.compute.amazonaws.com:8080/showSongs/';
  constructor(public http: Http, public platform: Platform) {
   
    }

    initialize(){

      let that = this;

        this.http.get('assets/data/albums.json').map(res => res.json()).subscribe(function(res){

          for (let i = 0; i < res['length']; i++) {

            for(let j=0;j < res[i].songList.length; j++)
            {
              let s = res[i].songList;
              s[j].image = "assets/imgs/albums/"+res[i].img
                s[j].artist = res[i].artist;
              that.allSongs.push(s[j]);
            }
          }
          that.allSongs = that.shuffle(that.allSongs);
        });
    }

    setCurrentSong(song)
    {
      this.currentSong = song;
    }

    getCurrentSong()
    {
      return this.currentSong
    }
 

  shuffle(arra1) {
      var ctr = arra1.length, temp, index;

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

    filterItems(searchTerm){
 
        return this.items.filter((item) => {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });    
 
    }

    getSongs(){
     return this.allSongs;
    }
 

    getAlbums(){
     return this.http.get('assets/data/albums.json').map(res => res.json())
     //return this.allAlbums;
    }
 

    getArtists(){
     return this.http.get('assets/data/artists.json').map(res => res.json())
    }
 

   filterSongs(songs){
        return this.http.get('assets/data/songs.json')
        .map(x => x.json().filter(c => (songs.filter(id => id == c.id).length > 0)))
    }

    filterFolders(folders){
        return this.http.get('assets/data/folder.json')
        .map(x => x.json().filter(c => (folders.filter(id => id == c.id).length > 0)))
    }
    
    songSearch(title){
        console.log(title);
        title = title.toLowerCase();
        title = title.replace('play','');
        this.posts = null;
        console.log(title);
        return this.http.get(this.apiUrl + title).map(res => res.json()).subscribe(res =>{
          console.log(res);
        });
    }
}
