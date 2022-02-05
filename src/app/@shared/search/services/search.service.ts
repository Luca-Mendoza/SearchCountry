import { Injectable } from '@angular/core';
import { ICountry } from 'src/app/@public/pages/coutry/interfaces/country.interface';
import { CoutryService } from 'src/app/@public/pages/coutry/service/coutry.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchTerm: string = '';
  hayErrros: boolean = false;
  itemsSearchCountry: ICountry[] = [];
  itemsSearchCapital: ICountry[] = [];
  itemsSearchRegion: ICountry[] = [];

  constructor(private coutryService: CoutryService) {}

  search(searchTerm: string) {
    // this.coutryService.searchCoutry(searchTerm).subscribe(
    //   (data) => {
    //     const items = data.map((item: ICountry) => {
    //       return item;
    //     });
    //     this.itemsSearchCountry = items;
    //     this.itemsSearchCountry;
    //     console.log(this.itemsSearchCountry);
    //   },
    //   (err) => {
    //     console.log(err);
    //     infoEventAlert(
    //       `Busqueda No encontrada`,
    //       `No se encontro nada con el nombre: <span class="searchTerm"> ${this.searchTerm}</span> `
    //     );
    //     this.hayErrros = true;
    //   }
    // );
  }

  searchCapital(searchTerm: string) {
    //   this.coutryService.searchCapital(searchTerm).subscribe(
    //     (data) => {
    //       const items = data.map((item: ICountry) => {
    //         return item;
    //       });
    //       this.itemsSearchCapital = items;
    //       console.log(this.itemsSearchCapital);
    //     },
    //     (err) => {
    //       console.log(err);
    //       infoEventAlert(
    //         `Busqueda No encontrada`,
    //         `No se encontro nada con el nombre: <span class="searchTerm"> ${this.searchTerm}</span> `
    //       );
    //       this.hayErrros = true;
    //     }
    //   );
    // }
  }
}
