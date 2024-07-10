import { Component } from '@angular/core';
import { ApiConectionService } from '../../services/api-conection.service';
import { DataServiceService } from '../../services/data-service.service';
import {catalogoResponse} from '../../models';

@Component({
  selector: 'app-mosaic',
  templateUrl: './mosaic.component.html',
  styleUrls: ['./mosaic.component.css']
})
export class MosaicComponent {
  selectedDescuento: any;


  constructor(
    public _conService: ApiConectionService,
    public _dataService: DataServiceService
  ) { }

  ngOnInit() {
    this.getCatalogos();
  }

  getCatalogos() {
    this._dataService.MosaicLoading=true;
    this._conService.getCatalogos().subscribe({
      next: (data: any) => {
        console.log("Data: ", data);
        this._dataService.catalogosResponse = data.map((catalogo: any) => {
          catalogo.imagen = "data:image/jpeg;base64," + catalogo.imagen;
          return catalogo;
        });

        console.log("data en servicio: ", this._dataService.catalogosResponse);
      },
      error: (error: { erros: { message: string | undefined; }; }) => {
        console.log(error.erros.message);
      },
      complete: () => {
        console.log("Completed");
        this._dataService.MosaicLoading=false;
      }
    });
  }

  catalogoTemp: catalogoResponse = new catalogoResponse();
  descuento(catalogo: catalogoResponse) {
    this.catalogoTemp= new catalogoResponse();
    this.catalogoTemp = catalogo;
    console.log("Catalogo: ", this.catalogoTemp);
    this._dataService.descuentos=[];
    this._conService.getDescuentos(catalogo.id_catalogo).subscribe(
       
      (data: any) => {
        let descuento:any;
        data.forEach((dato: { [x: string]: any; }) => {
          switch (dato['descuento']) {
            case 1:
               descuento= {
                descuento: "10%",
                val:1
              }
              this._dataService.descuentos.push(descuento);

              break;
            case 2:
              descuento= {
                descuento: "20%",
                val:2
              }
              this._dataService.descuentos.push(descuento);

              break;
            case 3:
              descuento= {
                descuento: "30%",
                val:3
              }
              this._dataService.descuentos.push(descuento);

              break;
            case 4:
              descuento= {
                descuento: "40%",
                val:4
              }
              this._dataService.descuentos.push(descuento);

              break;
            case 5:
              descuento= {
                descuento: "50%",
                val:5
              }
              this._dataService.descuentos.push(descuento);

              break;
            case 6:
              descuento= {
                descuento: "60%",
                val:6
              }
              this._dataService.descuentos.push(descuento);

              break;
            case 7:
              descuento= {
                descuento: "70%",
                val:7
              }
              this._dataService.descuentos.push(descuento);

              break;
            case 8:
              descuento= {
                descuento: "80%",
                val:8
              }
              this._dataService.descuentos.push(descuento);

              break;
            case 9:
              descuento= {
                descuento: "90%",
                val:9
              }
              this._dataService.descuentos.push(descuento);

              break;
            case 10:
              descuento= {
                descuento: "100%",
                val:10
              }
              this._dataService.descuentos.push(descuento);

              break;
            case 11:
              descuento= {
                descuento: "Precio Socio",
                val:11
              }
              this._dataService.descuentos.push(descuento);

              break;
            case 12:
              descuento= {
                descuento: "Formula Ganadora 50% N - 30% I",
                val:12
              }
              this._dataService.descuentos.push(descuento);
              break;

            default:
              break;
          }
        });
        console.log("Data at data service: ", this._dataService.descuentos);
      }
    );

    //ABRIR MODAL
    const modalElement = document.getElementById('exampleModal');
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();
  }

  accept() {
    let clave;
    switch (this.selectedDescuento) {
      case 1:
         clave="LDE"

        break;
      case 2:
         clave="RVD"

        break;
      case 3:
         clave="CWS"

        break;
      case 4:
         clave="EMC"

        break;
      case 5:
         clave="DAF"

        break;
      case 6:
         clave="SPK"

        break;
      case 7:
         clave="MLV"

        break;
      case 8:
         clave="TDX"

        break;
      case 9:
         clave="ZKA"

        break;
      case 10:
         clave="WGN"

        break;
      case 11:
         clave="VPM"

        break;
      case 12:
         clave="GBS"

        break;
      
      default:
        break;
    }
    // let url = `${this.catalogoTemp.url}/${clave}`;
    let url = `${this.catalogoTemp.url}`;
    console.log("Url: ", url);
    window.location.href = url;
    // window.location.href = this.catalogoTemp.url;

  }
}
