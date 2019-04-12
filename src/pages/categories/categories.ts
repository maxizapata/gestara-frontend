import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoopProvider } from '../../providers/coop/coop';
import { HomePage } from '../home/home';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  categories: any = []

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public coopProv: CoopProvider) {
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

  ionViewDidLoad(){
    this.inicializeCategoies()
  }

  goHome(category: any){
    this.navCtrl.setRoot(HomePage, {
      set_categ: category.name
    })
  }

}
