import { Component, Input } from '@angular/core';
import { ICountry } from 'src/app/@public/pages/coutry/interfaces/country.interface';
import { SearchService } from '../search/services/search.service';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss'],
})
export class TablePaginationComponent {
  @Input() items: ICountry[] = [];

  constructor() {}
}
