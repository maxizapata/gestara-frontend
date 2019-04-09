import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CoopProvider } from '../../providers/coop/coop';
import { DetailPage } from '../detail/detail'
import { ActionSheetController } from 'ionic-angular'


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  cooperatives: any = [];
  categories: any = [];
  set_category: string = 'todos'


  //constructor(public navCtrl: NavController) {}
  constructor(public navCtrl: NavController,
              public coopProv: CoopProvider,
              public actionSheetCtrl: ActionSheetController
              ) {}

  ionViewDidLoad(){
    this.inicializeCoops()
    this.inicializeCategoies();   
  }

  inicializeCoops() : void {
    console.log('empieza')
    this.coopProv.getCoops()
    .subscribe(
      (data) => { // Success
        this.cooperatives = data; 
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  inicializeCategoies() {
    console.log('empieza cat')
    this.coopProv.getCategories()
    .subscribe(
      (data) => { // Success
        this.categories = data;
        console.log(this.categories)
      },
      (error) =>{
        console.error(error);
      }
    )
  }


  goDetail(cooperative: any){
    this.navCtrl.push(DetailPage, {
      name: cooperative.name,
      short_description: cooperative.short_description,
      description: cooperative.description,
      logo: cooperative.logo,
      web: cooperative.web,
      phone: cooperative.phone,
      facebook: cooperative.facebook,
      instagram: cooperative.instagram,
      email: cooperative.email,
      skype: cooperative.skype,
      address: cooperative.address,
      map_latitude: cooperative.map_latitude,
      map_longitude: cooperative.map_longitude,
      whatsapp: cooperative.whatsapp,
      category: cooperative.category[0]
    })
  }
  
 presentActionSheet() {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Selecciona una categoría',
    buttons: [
      {
        text: 'Todas',
        handler: () => {
          this.set_category='todos';
        }
      },
      {
        text: 'Audiovisual',
        handler: () => {
          this.set_category='audiovisual';
        }
      },
      {
        text: 'Carpintería',
        handler: () => {
          this.set_category='carpinteria';
        }
      },
      {
        text: 'Comercio',
        handler: () => {
          this.set_category='comercio';
        }
      },
      {
        text: 'Comunicación',
        handler: () => {
          this.set_category='comunicacion';
        }
      },
      {
        text: 'Diseño',
        handler: () => {
          this.set_category='diseño';
        }
      },
      {
        text: 'Gastronomía',
        handler: () => {
          this.set_category='gastronomia';
        }
      },
      {
        text: 'Limpieza',
        handler: () => {
          this.set_category='limpieza';
        }
      },
      {
        text: 'Profesionales',
        handler: () => {
          this.set_category='profesionales';
        }
      },
      {
        text: 'Servicio',
        handler: () => {
          this.set_category='servicio';
        }
      },
      {
        text: 'Textil',
        handler: () => {
          this.set_category='textil';
        }
      },
      
    ]
  });

  actionSheet.present();
}
}





