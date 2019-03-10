import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ForumPage } from '../forum/forum';
import { LoginPage } from '../login/login';
import { ProfileadminPage } from '../profileadmin/profileadmin';
import { AddustazPage } from '../addustaz/addustaz';
import { RemoveustazPage } from '../removeustaz/removeustaz';

@IonicPage()
@Component({
  selector: 'page-adminpage',
  templateUrl: 'adminpage.html',
})
export class AdminpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public _app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminpagePage');
  }

  adminprofile(){
    this.navCtrl.push(ProfileadminPage);
  }

  add(){
  this.navCtrl.push(AddustazPage);
  }

  rem(){
   this.navCtrl.push(RemoveustazPage);
  }

  forum(){
    this.navCtrl.push(ForumPage);
  }

  logout(){
    window.localStorage.removeItem('icnumber');
    window.localStorage.clear();
 
    this._app.getRootNav().setRoot(LoginPage);
  }

}
