import { Injectable } from '@angular/core';
import {catalogoResponse} from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  catalogosResponse: catalogoResponse []= [];
  descuentos:any[]=[]

  constructor() { }
}
