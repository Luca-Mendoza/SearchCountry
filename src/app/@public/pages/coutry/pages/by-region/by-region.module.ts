import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByRegionRoutingModule } from './by-region-routing.module';
import { ByRegionComponent } from './by-region.component';
import { TablePaginationModule } from 'src/app/@shared/table-pagination/table-pagination.module';
import { SearchModule } from 'src/app/@shared/search/search.module';

@NgModule({
  declarations: [ByRegionComponent],
  imports: [CommonModule, ByRegionRoutingModule, TablePaginationModule, SearchModule],
})
export class ByRegionModule { }
