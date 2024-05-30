import { Component } from '@angular/core';
import {ApiConectionService} from '../../services/api-conection.service';
import {DataServiceService} from '../../services/data-service.service';

@Component({
  selector: 'app-mosaic',
  templateUrl: './mosaic.component.html',
  styleUrls: ['./mosaic.component.css']
})
export class MosaicComponent {

  selectedCatalogo: any;

  constructor(
    public _conService: ApiConectionService,
    public _dataService: DataServiceService
  ){}

  ngOnInit() {
    this.getCatalogos();
  }

  getCatalogos(){
    this._conService.getCatalogos().subscribe({
      next: (data:any)=>{ 
        console.log("Data: ", data);
        this._dataService.catalogosResponse = data.map((catalogo: any) => {
          catalogo.imagen = "data:image/jpeg;base64," + catalogo.imagen;
          return catalogo;
        });

        console.log("data en servicio: ", this._dataService.catalogosResponse);
      },
      error:(error: { erros: { message: string | undefined; }; }) => {
        console.log(error.erros.message);
      },
      complete: () =>{
        console.log("Completed");
      }
    });
  }

  descuento(catalogo: any) {
    this.selectedCatalogo = catalogo;
    // Obtener el modal de Bootstrap por ID y mostrarlo
    const modalElement = document.getElementById('exampleModal');
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();
  }

  accept() {
    console.log('Modal aceptado');
    // Aquí puedes agregar la lógica adicional||   que necesites después de aceptar
  }
}
