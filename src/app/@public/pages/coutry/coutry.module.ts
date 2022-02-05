import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoutryRoutingModule } from './coutry-routing.module';
import { CoutryComponent } from './coutry.component';
import { TablePaginationModule } from 'src/app/@shared/table-pagination/table-pagination.module';
import { SearchModule } from 'src/app/@shared/search/search.module';

@NgModule({
  declarations: [CoutryComponent],
  imports: [CommonModule, CoutryRoutingModule, TablePaginationModule, SearchModule],
})
export class CoutryModule { }
