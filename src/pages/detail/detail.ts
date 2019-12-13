import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  count = 0;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              ) {}


  picture = this.navParams.get('logo')
  name = this.navParams.get('name')
  description = this.navParams.get('description')
  phone = this.navParams.get('phone')
  web = this.navParams.get('web')
  facebook = this.navParams.get('facebook')
  instagram = this.navParams.get('instagram')
  twitter = this.navParams.get('twitter')
  email = this.navParams.get('email')
  skype = this.navParams.get('skype')
  whatsapp = this.navParams.get('whatsapp')
  latitude = this.navParams.get('map_latitude')
  longitude = this.navParams.get('map_longitude')
  address = this.navParams.get('address')
  off = this.navParams.get('off')

  goMap(){
    this.navCtrl.push(MapPage, {
      name: this.name,
      address: this.address,
      latitude: this.latitude,
      longitude: this.longitude,
      })

  }








}
