import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { TablePaginationComponent } from './table-pagination.component';


@NgModule({
  declarations: [TablePaginationComponent],
  imports: [CommonModule, RouterModule],
  exports: [TablePaginationComponent],
})
export class TablePaginationModule { }
