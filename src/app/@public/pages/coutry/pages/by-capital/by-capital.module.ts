import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByCapitalRoutingModule } from './by-capital-routing.module';
import { ByCapitalComponent } from './by-capital.component';
import { TablePaginationModule } from 'src/app/@shared/table-pagination/table-pagination.module';
import { SearchModule } from 'src/app/@shared/search/search.module';

@NgModule({
  declarations: [ByCapitalComponent],
  imports: [CommonModule, ByCapitalRoutingModule, TablePaginationModule, SearchModule],
})
export class ByCapitalModule { }
