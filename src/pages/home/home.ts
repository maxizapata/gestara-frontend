import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams, AlertController, Platform } from 'ionic-angular';
import { CoopProvider } from '../../providers/coop/coop';
import { DetailPage } from '../detail/detail';
import { CategoriesPage } from '../categories/categories';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  loading: any
  cooperatives: any = [];
  cooperatives_filter: any = []
  category_selected: any = this.navParams.get('set_categ')
  enableLoad: boolean = false



  //constructor(public navCtrl: NavController) {}
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public coopProv: CoopProvider,
              public alertCtrl: AlertController,
              public loadCrtl: LoadingController,
              public platform: Platform,
 ){}
              

  ionViewDidLoad(){
    this.inicializeCoops()
  }

  
  inicializeCoops() : void {
    //this.showLoader()
    this.enableLoad = true
    this.coopProv.getCoops()
    .subscribe(
      (data) => { // Success
          //this.loading.dismiss()
          this.enableLoad = false
          this.cooperatives = data;
          this.cooperatives_filter = data;
          this.onFilter(this.category_selected)
      },
      (error) =>{
        console.error(this.showAlert());
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
      twitter: cooperative.twitter,
      email: cooperative.email,
      skype: cooperative.skype,
      address: cooperative.address,
      map_latitude: cooperative.map_latitude,
      map_longitude: cooperative.map_longitude,
      whatsapp: cooperative.whatsapp,
      off: cooperative.off,
      category: cooperative.category[0]
    })
  }

  filterCoops(param: any): void {
    let val: string = param;
    if (val.trim() !== '') {
       this.cooperatives_filter = this.cooperatives.filter((item) => {
         return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
         item.short_description.toLowerCase().indexOf(val.toLowerCase()) > -1
       });
    } 
    if (val.trim() === '') {
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
    /*else if (varcategory.trim() == 'todas')
    {
      this.inicializeCoops();

    }*/
 }

 goCategories(){
   this.navCtrl.push(CategoriesPage)
 }


showLoader(){
  this.loading = this.loadCrtl.create({
    content: 'Cargando...'
  });
  this.loading.present();
}

resetCategories(){
  this.category_selected = 'todas'
  this.inicializeCoops()
}

showAlert() {
  const confirm = this.alertCtrl.create({
    title: 'Error de conexión',
    message: 'No se puede establecer conexión con el servidor. Revisa tu conexión a internet y vuelve a intentar.',
    buttons: [
       {
        text: 'Ok',
        handler: () => {
          this.platform.exitApp();
        }
      }
    ]
  });
  confirm.present();
}
}