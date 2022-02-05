import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsCountryRoutingModule } from './details-country-routing.module';
import { DetailsCountryComponent } from './details-country.component';
import { TablePaginationModule } from 'src/app/@shared/table-pagination/table-pagination.module';

@NgModule({
  declarations: [DetailsCountryComponent],
  imports: [CommonModule, DetailsCountryRoutingModule, TablePaginationModule],
})
export class DetailsCountryModule { }
