import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

declare var google;


@IonicPage()
@Component({
    selector: 'page-map',
    templateUrl: 'map.html'
})
export class MapPage {
	lat = Number(this.navParams.get('latitude'))
	lng = Number(this.navParams.get('longitude'))
	address = this.navParams.get('address')

	map: any;

	constructor(
		private navParams: NavParams,
	  ) {}

	name = this.navParams.get('name')

    ionViewDidLoad(){
		this.loadMap();

    }
    
    
    loadMap(){
	let latitude:number = this.lat;
	let longitude:number = this.lng;

	// create a new map by passing HTMLElement
	let mapEle: HTMLElement = document.getElementById('map');

	// create LatLng object
	let myLatLng = {lat: latitude, lng: longitude};

	// create map
	this.map = new google.maps.Map(mapEle, {
	    center: myLatLng,
	    zoom: 12
	});

	google.maps.event.addListenerOnce(this.map, 'idle', () => {
		let marker = new google.maps.Marker({
			position: myLatLng,
			map: this.map,
			title: this.navParams.get('name')
		});
	    mapEle.classList.add('show-map');
	});
	}
	
}
