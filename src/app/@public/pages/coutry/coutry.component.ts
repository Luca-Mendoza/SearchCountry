import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { infoEventAlert } from 'src/app/@shared/alerts/alerts';

import { SearchService } from 'src/app/@shared/search/services/search.service';
import { ICountry } from './interfaces/country.interface';
import { CoutryService } from './service/coutry.service';

@Component({
  selector: 'app-coutry',
  templateUrl: './coutry.component.html',
  styleUrls: ['./coutry.component.scss'],
})
export class CoutryComponent implements OnInit {
  title: string = 'Country Search';

  searchTerm: string = '';
  itemsSearch: ICountry[] = [];

  countrySuggestions: ICountry[] = [];
  displaySuggestions: boolean = false;

  constructor(
    private coutryService: CoutryService,
    private serviceSearch: SearchService
  ) {
    this.itemsSearch = this.serviceSearch.itemsSearchCountry;
  }

  ngOnInit(): void {}

  searchCoutry(searchTerm: string) {
    this.displaySuggestions = false;

    this.searchTerm = searchTerm;
    this.coutryService.searchCoutry(searchTerm).subscribe(
      (infoCountry: any) => {
        if (infoCountry.status === 404) {
          infoEventAlert(
            'Country not found',
            `Country not found: ${searchTerm} `
          );
        }
        this.itemsSearch = infoCountry;
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

  suggestions(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.displaySuggestions = true;
    this.coutryService.searchCoutry(searchTerm).subscribe(
      (country) => (this.countrySuggestions = country.splice(0, 3)),
      (err) => (this.countrySuggestions = [])
    );
  }

  searchSuggestions(searchTerm: string) {
    this.searchCoutry(searchTerm);
    this.countrySuggestions = [];
    this.displaySuggestions = false;
  }
}
