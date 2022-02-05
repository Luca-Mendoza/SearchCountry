import { Component, Input, OnInit } from '@angular/core';
import { infoEventAlert } from 'src/app/@shared/alerts/alerts';
import { ICountry } from '../../interfaces/country.interface';
import { CoutryService } from '../../service/coutry.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.scss'],
})
export class ByRegionComponent implements OnInit {
  title: string = 'region search';

  region: Array<string> = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActive: string = '';

  @Input() itemsSearch: ICountry[] = [];

  constructor(private coutryService: CoutryService) {}

  ngOnInit(): void {}

  getClassCss(region: string) {
    return region === this.regionActive ? 'disabled' : 'active';
  }

  activeRegion(region: string) {
    this.regionActive = region;
    this.itemsSearch = [];
    this.searchRegion(region);
  }

  searchRegion(searchTerm: string) {
    this.coutryService.searchRegion(searchTerm).subscribe(
      (infoCountry: any) => {
        if (infoCountry.status === 404) {
          infoEventAlert(
            'Country not found',
            `Country not found: ${searchTerm} `
          );
        }
        this.itemsSearch = infoCountry;
        console.log(this.itemsSearch);
      },
      (err) => {
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
