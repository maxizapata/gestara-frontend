import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class CoopProvider {
  categories: any = []
  urlApi = 'http://16887.l.time4vps.cloud:8000/'

  cooperatives: any;

  constructor(public http: HttpClient){
  }

  getCoops() {
    return this.http.get(this.urlApi + 'api/v1/cooperatives/')
  }
  
  getCategories() {
      return this.http.get(this.urlApi + 'api/v1/categories/')
    }
    inicializeCategoies() {
      this.getCategories()
      .subscribe(
        (data) => { // Success
          this.categories = data;
        },
        (error) =>{
          console.error(error);
        }
      )
  }
}
