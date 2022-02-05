import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { infoEventAlert } from 'src/app/@shared/alerts/alerts';
import { SearchService } from 'src/app/@shared/search/services/search.service';
import { ICountry } from '../../interfaces/country.interface';
import { CoutryService } from '../../service/coutry.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.scss'],
})
export class ByCapitalComponent {
  title: string = 'capital search';

  searchTerm: string = '';
  paisesSugeridos: ICountry[] = [];
  mostrarSugerencias: boolean = false;

  hayError: boolean = false;

  itemsSearch: ICountry[] = [];

  constructor(private coutryService: CoutryService) {}

  searchCapital(searchTerm: string) {
    console.log(searchTerm);
    this.coutryService.searchCapital(searchTerm).subscribe(
      (infoCountry: any) => {
        if (infoCountry.status === 404) {
          infoEventAlert(
            'Country not found',
            `Country not found: ${searchTerm} `
          );
        }
        this.itemsSearch = infoCountry;
        console.log(infoCountry);
      },
      (err: any) => {
        infoEventAlert(
          'Country not found',
          `Country not found: ${searchTerm} `
        );
        this.itemsSearch = [];
      }
    );
  }

  sugerencias(searchTerm: string) {
    // this.searchTerm = searchTerm;
    // this.mostrarSugerencias = true;
    // this.coutryService.searchCoutry(searchTerm).subscribe(
    //   (paises) => (this.paisesSugeridos = paises.splice(0, 5)),
    //   (err) => (this.paisesSugeridos = [])
    // );
  }
}
