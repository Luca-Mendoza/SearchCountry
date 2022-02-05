import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByRegionComponent } from './by-region.component';

const routes: Routes = [{ path: '', component: ByRegionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ByRegionRoutingModule {}
