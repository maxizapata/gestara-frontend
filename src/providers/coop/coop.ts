import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CoopProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoopProvider {
  urlApi = 'http://16887.l.time4vps.cloud:8000/'

  constructor(public http: HttpClient){}

  getCoops() {
    return this.http.get(this.urlApi + 'api/v1/cooperatives/')
    }

  getCategories() {
      return this.http.get(this.urlApi + 'api/v1/categories/')
    }
  
  

}
