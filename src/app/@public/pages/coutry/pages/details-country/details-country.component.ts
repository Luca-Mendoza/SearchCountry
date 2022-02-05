import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { ICountry } from '../../interfaces/country.interface';
import { CoutryService } from '../../service/coutry.service';

@Component({
  selector: 'app-details-country',
  templateUrl: './details-country.component.html',
  styleUrls: ['./details-country.component.scss'],
})
export class DetailsCountryComponent implements OnInit {
  country!: ICountry;
  title: string = `Country Details `;

  constructor(
    private activatedRoute: ActivatedRoute,
    private coutryService: CoutryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.coutryService.getCoutryAlphaDetail(id)),
        tap((country) => ((this.country = country), console.log(country)))
      )
      .subscribe((country) => (this.country = country));
  }
}
