import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConectionService {
  // API_URL='http://localhost:61845/api';
  API_URL='https://servicios.impuls.com.mx:451/api';

  constructor(
    private _http: HttpClient
  ) { }

  getCatalogos(){
    console.log(`api url: ${this.API_URL}/Catalogos`);
    let response: any = this._http.get(`${this.API_URL}/Catalogos`);
    return response;
  }
  
  getDescuentos(idCatalogo:number){
    let response: any = this._http.get(`${this.API_URL}/Descuentos/${idCatalogo}`);
    return response;
  }
}
