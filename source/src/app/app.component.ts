import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage} from '../pages/home/home';
import { PlaylistPage} from '../pages/playlist/playlist';
import { SettingsPage} from '../pages/settings/settings';
import { DataProvider } from '../providers/data/data';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  activePage: any;

  pages: Array<{title: string, component: any, icon:any}>;

  constructor(public platform: Platform, public menu: MenuController, public musicData: DataProvider,public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.musicData.initialize();

        this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Playlist', component: PlaylistPage, icon: 'list-box' },
      { title: 'Settings', component: SettingsPage, icon: 'settings' },
      
    ];
    this.activePage = this.pages[0];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    this.activePage = page;
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  checkActive(page){
    return page == this.activePage;
  }
}

