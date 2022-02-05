import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsCountryComponent } from './details-country.component';

const routes: Routes = [
  {
    path: '',
    component: DetailsCountryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsCountryRoutingModule {}
