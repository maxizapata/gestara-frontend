import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, Loading } from 'ionic-angular';
import { CoopProvider } from '../../providers/coop/coop';
import { DetailPage } from '../detail/detail'
import { AlertController } from 'ionic-angular'


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  loading: any
  cooperatives: any = [];
  categories: any = [];
  set_category: string = 'todos';
  cooperatives_filter: any = []



  //constructor(public navCtrl: NavController) {}
  constructor(public navCtrl: NavController,
              public coopProv: CoopProvider,
              public alertCtrl: AlertController,
              public loadCrtl: LoadingController,
              ) {}

  ionViewDidLoad(){
    this.inicializeCoops()
    this.inicializeCategoies();
    this.cooperatives_filter = this.cooperatives;

  }

  
  inicializeCoops() : void {
    this.showLoader()
    this.coopProv.getCoops()
    .subscribe(
      (data) => { // Success
          this.loading.dismiss()
          this.cooperatives = data;
          this.cooperatives_filter = data;
      },
      (error) =>{
        console.error(error);
      }
    )
  }
  

  inicializeCategoies() {
    this.coopProv.getCategories()
    .subscribe(
      (data) => { // Success
        this.categories = data;
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

  filterCoops(param: any): void {
    let val: string = param;
    if (val.trim() !== '') {
       this.cooperatives_filter = this.cooperatives.filter((item) => {
         return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1
       });
    } 
    else if (val.trim() == ''){
      this.inicializeCoops()
    }
 }
 
 onFilter(varcategory : string) : void
 {
    // Only filter the technologies array IF the selection is NOT equal to value of all
    if (varcategory.trim() !== 'todas')
    {
      this.cooperatives_filter = this.cooperatives.filter((item) =>
       {
         if (Object.keys(item.category).length == 1){
          return item.category[0].toLowerCase().indexOf(varcategory.toLowerCase()) > -1;
         }
         if (Object.keys(item.category).length == 2){
          return item.category[0].toLowerCase().indexOf(varcategory.toLowerCase()) > -1 ||
          item.category[1].toLowerCase().indexOf(varcategory.toLowerCase()) > -1;
         }
         if (Object.keys(item.category).length == 3){
          return item.category[0].toLowerCase().indexOf(varcategory.toLowerCase()) > -1 ||
          item.category[1].toLowerCase().indexOf(varcategory.toLowerCase()) > -1 ||
          item.category[2].toLowerCase().indexOf(varcategory.toLowerCase()) > -1;
         }
         if (Object.keys(item.category).length == 4){
          return item.category[0].toLowerCase().indexOf(varcategory.toLowerCase()) > -1 ||
          item.category[1].toLowerCase().indexOf(varcategory.toLowerCase()) > -1 ||
          item.category[2].toLowerCase().indexOf(varcategory.toLowerCase()) > -1 ||
          item.category[3].toLowerCase().indexOf(varcategory.toLowerCase()) > -1;


         }
           
      })
    }
    else if (varcategory.trim() == 'todas')
    {
      this.inicializeCoops();

    }
 }

 showRadio() {
  let alert = this.alertCtrl.create();
  alert.setTitle('Filtra por categoría');

  alert.addInput({
    type: 'radio',
    label: 'Servicio',
    value: 'servicio',
    checked: false
  });

  alert.addInput({
    type: 'radio',
    label: 'Todas',
    value: 'todas',
    checked: true
  });

  alert.addInput({
    type: 'radio',
    label: 'Audiovisual',
    value: 'audiovisual',
    checked: false
  });

  alert.addInput({
    type: 'radio',
    label: 'Carpintería',
    value: 'carpinteria',
    checked: false
  });

  alert.addInput({
    type: 'radio',
    label: 'Comercio',
    value: 'comercio',
    checked: false
  });


  alert.addInput({
    type: 'radio',
    label: 'Comunicación',
    value: 'comunicacion',
    checked: false
  });


  alert.addInput({
    type: 'radio',
    label: 'Construcción',
    value: 'construccion',
    checked: false
  });


  alert.addInput({
    type: 'radio',
    label: 'Diseño',
    value: 'diseño',
    checked: false
  });


  alert.addInput({
    type: 'radio',
    label: 'Gastronomía',
    value: 'gastronomia',
    checked: false
  });


  alert.addInput({
    type: 'radio',
    label: 'Limpieza',
    value: 'limpieza',
    checked: false
  });


  alert.addInput({
    type: 'radio',
    label: 'Profesionales',
    value: 'profesionales',
    checked: false
  });


  alert.addInput({
    type: 'radio',
    label: 'Textil',
    value: 'textil',
    checked: false
  });

  alert.addButton('Cancelar');
  alert.addButton({
    text: 'Aceptar',
    handler: data => {
      this.onFilter(data)
    }
  });
  alert.present();
}


showLoader(){
  this.loading = this.loadCrtl.create({
    content: 'Cargando...'
  });
  this.loading.present();
}

}





