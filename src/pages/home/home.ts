import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { FaqPage } from '../faq/faq';
import { BabydataPage } from '../babydata/babydata';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';
import { MessagePage } from '../message/message';
import { ForumPage } from '../forum/forum';
import { SearchPage } from '../search/search';
import { AnnouncementPage } from '../announcement/announcement';
import { AdminpagePage } from '../adminpage/adminpage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public _app: App) {

  }

  redirect = ['toForum()','toFAQ()','toProfile()','toForum()','toForum()','toForum()'];

  toProfile(){
    this.navCtrl.push(ProfilePage);
  }

  toFAQ(){
    this.navCtrl.push(FaqPage);
  }

  toBabydata(){
    this.navCtrl.push(BabydataPage);
  }

  toForum(){
    this.navCtrl.push(ForumPage);
  }

  toSearch(){
    this.navCtrl.push(SearchPage);
  }

  toAnnounce(){
    this.navCtrl.push(AnnouncementPage);
  }

  logout(){
    window.localStorage.removeItem('icnumber');
    window.localStorage.clear();
 
    this._app.getRootNav().setRoot(LoginPage);
  }


}
