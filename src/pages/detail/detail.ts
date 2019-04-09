import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  count = 0;
  url = "http://16887.l.time4vps.cloud:8000/media/pictures/generic/";
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              ) {}

  ionViewDidLoad() {
    console.log(this.navParams.get('category'));
  }

  picture = this.navParams.get('logo')
  name = this.navParams.get('name')
  description = this.navParams.get('description')
  phone = this.navParams.get('phone')
  web = this.navParams.get('web')
  facebook = this.navParams.get('facebook')
  instagram = this.navParams.get('instagram')
  email = this.navParams.get('email')
  skype = this.navParams.get('skype')
  whatsapp = this.navParams.get('whatsapp')
  latitude = this.navParams.get('map_latitude')
  longitude = this.navParams.get('map_longitude')
  address = this.navParams.get('address')

  goMap(){
    this.navCtrl.push(MapPage, {
      name: this.name,
      address: this.address,
      latitude: this.latitude,
      longitude: this.longitude,
      })

  }








}
