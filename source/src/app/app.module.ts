import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injectable } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { DataProvider } from '../providers/data/data';
import { HomePage } from '../pages/home/home';
import { PlaylistPage } from '../pages/playlist/playlist';
import { AlbumsPage } from '../pages/albums/albums';
import { ArtistsPage } from '../pages/artists/artists';
import { GenresPage } from '../pages/genres/genres';
import { FoldersPage } from '../pages/folders/folders';
import { SettingsPage } from '../pages/settings/settings';
import { CurrentplayingPage } from '../pages/currentplaying/currentplaying';
import { MusicPage } from '../pages/music/music';
import {ProgressBarModule} from "angular-progress-bar";
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { SearchPage } from '../pages/search/search';
import { NativeAudio } from '@ionic-native/native-audio';
import { Media, MediaObject } from '@ionic-native/media';
import { IonicAudioModule, AudioProvider, WebAudioProvider, defaultAudioProviderFactory } from 'ionic-audio';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
PlaylistPage,
AlbumsPage,
ArtistsPage,
GenresPage,
FoldersPage,
SettingsPage,
CurrentplayingPage,
MusicPage,
SearchPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ProgressBarModule,
    IonicModule.forRoot(MyApp),
    IonicAudioModule.forRoot(defaultAudioProviderFactory)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
        HomePage,
PlaylistPage,
AlbumsPage,
ArtistsPage,
GenresPage,
FoldersPage,
SettingsPage,
CurrentplayingPage,
MusicPage,
SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    NativeAudio,
    Media
  ]
})
export class AppModule {}
