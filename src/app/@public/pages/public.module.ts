import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SearchModule } from 'src/app/@shared/search/search.module';

@NgModule({
  declarations: [PublicComponent, NavbarComponent],
  imports: [CommonModule, PublicRoutingModule, SearchModule],
})
export class PublicModule { }
