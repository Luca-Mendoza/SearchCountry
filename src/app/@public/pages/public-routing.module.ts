import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./coutry/coutry.module').then((m) => m.CoutryModule),
      },
      {
        path: 'coutry/by-capital',
        loadChildren: () =>
          import('./coutry/pages/by-capital/by-capital.module').then(
            (m) => m.ByCapitalModule
          ),
      },
      {
        path: 'coutry/by-region',
        loadChildren: () =>
          import('./coutry/pages/by-region/by-region.module').then(
            (m) => m.ByRegionModule
          ),
      },
      {
        path: 'coutry/:id',
        loadChildren: () =>
          import('./coutry/pages/details-country/details-country.module').then(
            (m) => m.DetailsCountryModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule { }
