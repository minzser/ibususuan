import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the SearchavailablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchavailable',
  templateUrl: 'searchavailable.html',
})
export class SearchavailablePage {

  constructor(public http   : HttpClient, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchavailablePage');
  }


  public items : Array<any> = [];
  public items2 : Array<any> = [];

  public name : Array<any> = [];
  public telnum : Array<any> = [];
  public state : Array<any> = [];
  public city : Array<any> = [];
  public role : Array<any> = [];
  public available : Array<any> = [];

  statez = "";

  checkButton = "";
  confirmed = "";



  cari(){
    this.items2 = [];
    this.confirmed="no";
    this.checkButton = 'yes';
        this.name = this.items.map(items => items.name);
        this.telnum = this.items.map(items => items.telnum);
        this.state = this.items.map(items => items.state);
        this.city = this.items.map(items => items.city);
        this.role = this.items.map(items => items.role);
        this.available = this.items.map(items => items.available);
        for(let i = 0; i <= this.items.length; i++){
          if(this.statez == this.state[i] && this.role[i] == "IbuSusuan" && this.available[i] == "Yes"){
            this.items2.push({name: this.name[i], telnum: this.telnum[i], state: this.state[i], city: this.city[i]});
            this.confirmed="yes";
          } else {
            if(this.confirmed == "yes"){
              this.confirmed="yes"
            } else {
              this.confirmed="no";
            }
          }
      }
  }



  ionViewWillEnter() : void
  {
     this.load();

  }

  load() : void
  {
     this.http
     .get('https://icaremumsmilk.000webhostapp.com/findibusu.php')
     .subscribe((data : any) =>
     {
        console.dir(data);
        this.items = data;

     },
     (error : any) =>
     {
        console.dir(error);
     });

  }



}
